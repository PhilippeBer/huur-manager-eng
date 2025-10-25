/**
 * Generates a report based on specified filters.
 * @param {string} reportType - The type of report to generate (monthly, renter-wise, property-wise).
 * @param {Date} startDate - The start date for the report.
 * @param {Date} endDate - The end date for the report.
 * @param {string} [filterByProperty] - Optional: Filter results by a specific property.
 * @return {string} - The HTML code for the report.
 * @customfunction
 */
function generateReport(reportType, startDate, endDate, filterByProperty) {
  // Define sheet names
  const paymentsSheetName = "Payments";
  const propertySheetName = "Propertydata";
  const renterSheetName = "Renterdata";

  // Get the spreadsheet and sheets
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const paymentsSheet = ss.getSheetByName(paymentsSheetName);
  const propertySheet = ss.getSheetByName(propertySheetName);
  const renterSheet = ss.getSheetByName(renterSheetName);

  if (!paymentsSheet || !propertySheet || !renterSheet) {
    return "<p>Error: One or more required sheets not found.</p>";
  }

  // Validate input
  if (!reportType || !startDate || !endDate) {
    return "<p>Error: Missing report type, start date, or end date.</p>";
  }

  // Date validation
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    return "<p>Error: Start date and end date must be valid Date objects.</p>";
  }
  if (startDate > endDate) {
      return "<p>Error: Start date cannot be after end date.</p>";
  }

  let reportData = [];

  // Function to validate that a date is in range
  function isDateInRange(date) {
    return date >= startDate && date <= endDate;
  }

  // Process payments
  const payments = paymentsSheet.getDataRange().getValues();
  for (let i = 1; i < payments.length; i++) { //skip header row
    const paymentDate = new Date(payments[i][2]); // Assuming date is in column C (index 2)
    if (isDateInRange(paymentDate)) {
      reportData.push({
        date: paymentDate,
        amount: payments[i][3], // Assuming amount is in column D (index 3)
        propertyId: payments[i][4], // Assuming property id in column E (index 4)
        renterId: payments[i][5] // Assuming renter ID in column F (index 5)
      });
    }
  }

  let reportHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report - ${reportType}</title>
    <style>
        /* Basic Report Styles */
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>${reportType} Report</h1>
    <p>Start Date: ${startDate.toLocaleDateString()}</p>
    <p>End Date: ${endDate.toLocaleDateString()}</p>
`;

  // Generate report based on report type
  switch (reportType) {
    case "monthly":
      // Implement monthly report logic
      reportHTML += "<table>";
      reportHTML += "<thead><tr><th>Date</th><th>Amount</th><th>Property</th><th>Renter</th></tr></thead>";
      reportHTML += "<tbody>";
      reportData.forEach(item => {
        reportHTML += `<tr><td>${item.date.toLocaleDateString()}</td><td>${item.amount}</td><td>${propertySheet.getRange(item.propertyId + 1,1).getValue()}</td><td>${renterSheet.getRange(item.renterId + 1,1).getValue()}</td></tr>`;
      });
      reportHTML += "</tbody></table>";
      break;
    case "renter-wise":
      // Implement renter-wise report logic
      reportHTML += "<table>";
      reportHTML += "<thead><tr><th>Renter</th><th>Total Amount Owed</th></tr></thead>";
      reportHTML += "<tbody>";
      const renterTotals = {};
      reportData.forEach(item => {
        const renterId = item.renterId;
        if (renterTotals[renterId]) {
          renterTotals[renterId] += item.amount;
        } else {
          renterTotals[renterId] = item.amount;
        }
      });
      for (const renterId in renterTotals) {
        reportHTML += `<tr><td>${renterSheet.getRange(renterId + 1, 1).getValue()}</td><td>${renterTotals[renterId]}</td></tr>`;
      }
      reportHTML += "</tbody></table>";
      break;
    case "property-wise":
      // Implement property-wise report logic
      reportHTML += "<table>";
      reportHTML += "<thead><tr><th>Property</th><th>Total Amount Owed</th></tr></thead>";
      reportHTML += "<tbody>";
      const propertyTotals = {};
      reportData.forEach(item => {
        const propertyId = item.propertyId;
        if (propertyTotals[propertyId]) {
          propertyTotals[propertyId] += item.amount;
        } else {
          propertyTotals[propertyId] = item.amount;
        }
      });

      for (const propertyId in propertyTotals) {
        reportHTML += `<tr><td>${propertySheet.getRange(propertyId + 1,1).getValue()}</td><td>${propertyTotals[propertyId]}</td></tr>`;
      }

      reportHTML += "</tbody></table>";
      break;
    default:
      reportHTML = "<p>Invalid report type.</p>";
  }

  reportHTML += `
</body>
</html>
`;
  return reportHTML;
}