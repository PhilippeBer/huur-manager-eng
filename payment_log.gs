/**
 * @fileoverview This script handles updating the payment log in the Google Sheet.
 * @updated 2024-02-29
 */

/**
 * Adds a new payment to the 'Payments' sheet.
 *
 * @param {string} propertyId The ID of the property associated with the payment.
 * @param {string} renterId The ID of the renter associated with the payment.
 * @param {number} amount The amount of the payment.
 * @param {date} date The date of the payment.
 * @param {string} status The status of the payment ('full' or 'partial').
 * @param {string} description Optional description for the payment.
 */
function addPayment(propertyId, renterId, amount, date, status, description) {
  // Get the spreadsheet and the 'Payments' sheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Payments");

  // Check if the required parameters are provided.
  if (!propertyId || !renterId || !amount || !date || !status) {
    Logger.log("Missing required parameters for adding a payment.");
    return;
  }

  // Validate the status.
  if (status !== "full" && status !== "partial") {
    Logger.log("Invalid payment status. Must be 'full' or 'partial'.");
    return;
  }

  // Get the next available row number in the 'Payments' sheet.
  var lastRow = sheet.getLastRow();
  var nextRow = lastRow + 1;

  // Write the payment information to the sheet.
  sheet.getRange(nextRow, 1).setValue(propertyId);
  sheet.getRange(nextRow, 2).setValue(renterId);
  sheet.getRange(nextRow, 3).setValue(amount);
  sheet.getRange(nextRow, 4).setValue(date);
  sheet.getRange(nextRow, 5).setValue(status);
  if (description) {
    sheet.getRange(nextRow, 6).setValue(description);
  }
  Logger.log("Payment added successfully.");
}

/**
 * Updates an existing payment in the 'Payments' sheet.
 *
 * @param {string} propertyId The ID of the property associated with the payment.
 * @param {string} renterId The ID of the renter associated with the payment.
 * @param {number} amount The new amount of the payment.
 * @param {date} date The date of the payment.
 * @param {string} status The new status of the payment ('full' or 'partial').
 * @param {string} description Optional description for the payment.
 * @param {number} paymentId The ID of the payment to update.
 */
function updatePayment(propertyId, renterId, amount, date, status, description, paymentId) {
  // Get the spreadsheet and the 'Payments' sheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Payments");

  // Validate the status.
  if (status !== "full" && status !== "partial") {
    Logger.log("Invalid payment status. Must be 'full' or 'partial'.");
    return;
  }

  // Find the row number of the payment to update.
  var lastRow = sheet.getLastRow();
  var paymentRow = -1;
  for (var i = 2; i <= lastRow; i++) {
    if (sheet.getRange(i, 1).getValue() == propertyId && sheet.getRange(i, 2).getValue() == renterId && sheet.getRange(i, 5).getValue() == status) {
      paymentRow = i;
      break;
    }
  }

  // If the payment is not found, log an error and return.
  if (paymentRow == -1) {
    Logger.log("Payment not found.");
    return;
  }

  // Update the payment information.
  sheet.getRange(paymentRow, 3).setValue(amount);
  sheet.getRange(paymentRow, 4).setValue(date);
  if (description) {
    sheet.getRange(paymentRow, 6).setValue(description);
  }
  Logger.log("Payment updated successfully.");
}

/**
 * Deletes a payment from the 'Payments' sheet.
 *
 * @param {number} paymentId The ID of the payment to delete.
 */
function deletePayment(paymentId) {
  // Get the spreadsheet and the 'Payments' sheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Payments");

  // Find the row number of the payment to delete.
  var lastRow = sheet.getLastRow();
  var paymentRow = -1;
  for (var i = 2; i <= lastRow; i++) {
    if (sheet.getRange(i, 1).getValue() == "PaymentID" && sheet.getRange(i, 2).getValue() == paymentId) {
      paymentRow = i;
      break;
    }
  }

  // If the payment is not found, log an error and return.
  if (paymentRow == -1) {
    Logger.log("Payment not found.");
    return;
  }

  // Delete the payment.
  sheet.deleteRow(paymentRow);
  Logger.log("Payment deleted successfully.");
}

/**
 * Retrieves all payments from the 'Payments' sheet.
 *
 * @return {Array<Array<any>>} An array of payment data, where each inner array represents a payment.
 */
function getAllPayments() {
  // Get the spreadsheet and the 'Payments' sheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Payments");

  // Get all the data in the sheet.
  var data = sheet.getDataRange().getValues();

  // Filter out the header row.
  data = data.slice(1);

  return data;
}