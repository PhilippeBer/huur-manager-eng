# README for huur-manager-eng

## PROJECT: huur manager (Google Sheet)

**NOTES:** [https://docs.google.com/document/d/1OjV_a2lNxTkDaubVBFIp8qZ2pi_VwAmnGgKEwKtVQk4/](https://docs.google.com/document/d/1OjV_a2lNxTkDaubVBFIp8qZ2pi_VwAmnGgKEwKtVQk4/)

## Project Overview

This project implements a comprehensive rental property management system built entirely within Google Sheets, leveraging the power of Google Apps Script. The goal is to provide landlords with a user-friendly platform to track payments, manage properties and renters, and generate insightful reports. 

**Architecture:**

The system utilizes a Google Sheet as its central data storage. Data is organized across multiple sheets within the spreadsheet. Google Apps Script is employed for all business logic, data manipulation, and UI generation. The UI is dynamically created within the spreadsheet using HTML and CSS, ensuring a cohesive and intuitive user experience.  The project is modular, with separate Apps Script files responsible for specific functionalities ? streamlining development and maintenance.

**Files:**

*   `main.html`:  Defines the structure and layout of the user interface within the Google Sheet.
*   `style.css`:  Provides styling rules to enhance the visual appearance of the UI.
*   `dashboard.gs`:  Handles the retrieval and display of summarized data (payment balances, outstanding payments) on the dashboard.
*   `paymentlog.gs`:  Manages the logging of payment transactions, ensuring data integrity and retrieval.
*   `propertydata.gs`:  Handles the storage, retrieval, addition, and modification of property information.
*   `renterdata.gs`:  Manages the storage, retrieval, addition, and modification of renter information.
*   `reportgenerator.gs`:  Generates customizable reports (monthly, renter-wise, property-wise) based on data within the spreadsheet.

## Installation and Setup

This project is designed to run directly within a Google Sheet. No separate installation is required. Here are the steps to set up and run the `huur-manager` project:

1.  **Create a New Google Sheet:**  Open Google Drive and create a new Google Sheet. This will be your project's workspace.
2.  **Access Script Editor:** In the Google Sheet, go to "Extensions" > "Apps Script". This opens the Apps Script editor.
3.  **Copy the Code:** Open each of the provided code files (`main.html`, `style.css`, `dashboard.gs`, `paymentlog.gs`, `propertydata.gs`, `renterdata.gs`, `reportgenerator.gs`) and copy their content.
4.  **Paste Code into Script Editor:**  In the Apps Script editor, create new script files for each of the copied code fragments by clicking the "+" button in the project explorer (left sidebar).  Paste the respective code into each new script file.  Name each file according to the file name specified in the `Files` section above.
5.  **Grant Permissions:**  When you run any of the scripts for the first time (e.g., to test the dashboard or report generation), Google Apps Script will request authorization to access your Google Sheets.  Grant the necessary permissions.
6. **Data Sheet Setup:** Ensure the data sheets (`Payments`, `Properties`, `Renters`) are created inside your Google Sheet. The scripts are designed to interact with these sheets.
7. **Edit the Notes Document:** Review the project notes document located at [https://docs.google.com/document/d/1OjV_a2lNxTkDaubVBFIp8qZ2pi_VwAmnGgKEwKtVQk4/](https://docs.google.com/document/d/1OjV_a2lNxTkDaubVBFIp8qZ2pi_VwAmnGgKEwKtVQk4/) for more detailed setup instructions and configuration guidelines.



## Project Flow

1.  **Payment Logging:** Landlords input payment details (property, renter, amount, date, payment type) through a form integrated into the Google Sheet. The `paymentlog.gs` script records this data in the "Payments" sheet.
2.  **Payment Summary & Dashboard:** The `dashboard.gs` script retrieves data from the "Payments" sheet, potentially combining it with data from the "Properties" and "Renters" sheets. It then renders a dashboard within the Google Sheet, displaying summaries of renter balances, outstanding payments, and payment statuses. This is achieved by generating HTML dynamically within the spreadsheet.
3.  **Report Generation:** Landlords use the `reportgenerator.gs` script to generate customizable reports (monthly, renter-wise, property-wise). The script allows specifying date ranges and selecting specific properties.  Reports are filtered and sorted before generation, with the output displayed in the Google Sheet or exported to Google Docs/Sheets.

## Features

*   **Payment Tracking:**  Record and manage full or partial payments.
*   **Property Management:** Add, edit, and delete property listings.
*   **Renter Management:** Add, edit, and delete renter profiles.
*   **Report Generation:**  Generate monthly, renter-wise, and property-wise reports with customizable date ranges.
*   **Balance Tracking:** Track renter and property balances.
*   **Payment History:** Maintain a detailed history of all payments.
*   **Filtering and Sorting:** Filter and sort data based on property, renter, date, and status.
*   **Data Validation:** Implemented to ensure data accuracy and consistency.

## Considerations

*   **Performance:**  Since the application runs within Google Sheets, performance can be a concern, especially with large datasets or complex calculations.  Optimizing formulas and scripts is crucial.
*   **Triggers:** Utilize Google Apps Script triggers to automate tasks such as report generation and potentially send payment reminders.
*   **Data Integrity:**  Carefully design the data model and implement validation rules to ensure the accuracy of stored information.
*   **User Interface (UI):** Design a user-friendly and intuitive UI within the Google Sheet to enhance the overall user experience.


## Contributing

Contributions are welcome! Please feel free to submit pull requests with enhancements or bug fixes.  Review the project's coding standards and guidelines before contributing.

## License

[Insert License Information Here - e.g., MIT License]