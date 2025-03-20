// Code your solution here
// Function to find drivers that match a given name (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// Function to find drivers whose names start with the given letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => driver.startsWith(letters));
}

// Function to find drivers whose name matches the provided string
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Export functions for testing
module.exports = { findMatching, fuzzyMatch, matchName };
