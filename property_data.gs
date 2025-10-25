/**
 * @fileoverview High-level checklist for property_data.gs
 * @updated 2024-02-29
 */

/**
 * Adds a new property to the property data.
 * @param {string} propertyName The name of the property.
 * @param {string} address The address of the property.
 * @param {number} bedrooms The number of bedrooms.
 * @param {number} bathrooms The number of bathrooms.
 * @param {number} rent The monthly rent.
 * @return {string} A success message.
 */
function addProperty(propertyName, address, bedrooms, bathrooms, rent) {
  // TODO: Implement adding property logic.
  // This is a placeholder.  In a real implementation, you'd write to the sheet.
  Logger.log(`Adding property: ${propertyName}, ${address}, ${bedrooms} bedrooms, ${bathrooms} bathrooms, rent: ${rent}`);
  return "Property added successfully.";
}

/**
 * Updates an existing property in the property data.
 * @param {number} propertyId The ID of the property to update.
 * @param {string} propertyName The new name of the property.
 * @param {string} address The new address of the property.
 * @param {number} bedrooms The new number of bedrooms.
 * @param {number} bathrooms The new number of bathrooms.
 * @param {number} rent The new monthly rent.
 * @return {string} A success message.
 */
function updateProperty(propertyId, propertyName, address, bedrooms, bathrooms, rent) {
  // TODO: Implement updating property logic.
  // This is a placeholder.  In a real implementation, you'd write to the sheet.
  Logger.log(`Updating property ID ${propertyId}: Name: ${propertyName}, Address: ${address}, Bedrooms: ${bedrooms}, Bathrooms: ${bathrooms}, Rent: ${rent}`);
  return "Property updated successfully.";
}

/**
 * Deletes a property from the property data.
 * @param {number} propertyId The ID of the property to delete.
 * @return {string} A success message.
 */
function deleteProperty(propertyId) {
  // TODO: Implement deleting property logic.
  // This is a placeholder.  In a real implementation, you'd write to the sheet.
  Logger.log(`Deleting property ID ${propertyId}`);
  return "Property deleted successfully.";
}

/**
 * Retrieves all properties from the property data.
 * @return {Array<Object>} An array of properties.
 */
function getAllProperties() {
  // TODO: Implement retrieving properties logic.
  // This is a placeholder. In a real implementation, you'd read from the sheet.
  Logger.log("Retrieving all properties");
  return [
    { id: 1, name: "Test Property 1", address: "123 Main St", bedrooms: 2, bathrooms: 1, rent: 1000 },
    { id: 2, name: "Test Property 2", address: "456 Oak Ave", bedrooms: 3, bathrooms: 2, rent: 1500 }
  ];
}

/**
 * Retrieves a property by ID.
 * @param {number} propertyId The ID of the property to retrieve.
 * @return {Object} The property object, or null if not found.
 */
function getPropertyById(propertyId) {
  // TODO: Implement retrieving property by ID logic.
  // This is a placeholder. In a real implementation, you'd read from the sheet.
    Logger.log(`Retrieving property with ID: ${propertyId}`);
  return { id: propertyId, name: "Test Property " + propertyId, address: "Address " + propertyId, bedrooms: 2, bathrooms: 1, rent: 1000 };

}