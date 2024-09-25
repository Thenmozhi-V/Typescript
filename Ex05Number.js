"use strict";
// Type guard function to check if a value is of type number
function isNumber(value) {
    return typeof value === 'number';
}
// Type guard function to check if a value is of type string
function isString(value) {
    return typeof value === 'string';
}
// Example usage of type guards:
function printValue(value) {
    if (isNumber(value)) {
        console.log(`The number is: ${value.toFixed(2)}`);
    }
    else if (isString(value)) {
        console.log(`The string is: "${value.trim()}"`);
    }
}
// Test the printValue function with different types
printValue(107994); // Output: The number is: 100.00
printValue("  TypeScript "); // Output: The string is: "TypeScript"
