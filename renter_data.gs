/**
 * Google Apps Script for Renter Data Management in a Google Sheet.
 *
 * This script provides functionality for adding, editing, and deleting renter data.
 */

// This function will be called when the page is loaded or a button is clicked to show/hide renters.
function showRenters() {
  // Implement logic to fetch renter data from the spreadsheet and display it in the UI.
  // This will likely involve creating a table using HTML and JavaScript.
  // For simplicity, this example just logs a message to the execution log.
  Logger.log("Showing Renters data...");
  // Example:  Get all rows from the 'Renters' sheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Renters"); // Ensure the sheet name is correct.
  if (sheet) {
    var dataRange = sheet.getDataRange();
    var values = dataRange.getValues();

    // Log the data for testing.
    Logger.log(values);
  } else {
    Logger.log("Renters sheet not found.");
  }
}

function addRenter() {
  // Implement logic to display a form for adding a new renter.
  // This form will collect renter information and store it in the 'Renters' sheet.
  // For simplicity this example does nothing.
  Logger.log("Adding Renter functionality...");
}

function editRenter() {
  // Implement logic to display a form for editing an existing renter.
  // This form should populate with the existing renter data and allow modifications.
  // After saving, the update the 'Renters' sheet.
  Logger.log("Edit Renter functionality...");
}

function deleteRenter() {
  // Implement logic to delete a renter from the 'Renters' sheet.
  // Prompt the user to confirm the deletion.
  Logger.log("Delete Renter functionality...");
}



/**
 * Retrieves renter data from the spreadsheet
 * @return {Array<Array<any>>}
 */
function getAllRenters() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Renters");
  if (!sheet) {
    Logger.log("Renters sheet not found");
    return [];
  }
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();

  // Remove header row
  values.shift();

  return values;
}


/**
 * Adds a new renter to the spreadsheet.
 * @param {Object} renterData - An object containing the renter's data.
 */
function addRenterToSheet(renterData) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Renters");
    if (!sheet) {
        Logger.log("Renters sheet not found");
        return;
    }

    sheet.appendRow([renterData.name, renterData.email, renterData.phone]); // Assuming name, email, and phone
}



/**
 * Helper function to validate renter data.
 * @param {Object} renterData
 * @return {boolean}  Returns true if data is valid, false otherwise
 */
function validateRenterData(renterData) {
    if (!renterData.name || renterData.name.trim() === "") {
        Logger.log("Name cannot be empty.");
        return false;
    }
    if (!renterData.email || renterData.email.trim() === "") {
        Logger.log("Email cannot be empty.");
        return false;
    }
    // Add more validation rules as needed (phone number format, etc.)
    return true;
}