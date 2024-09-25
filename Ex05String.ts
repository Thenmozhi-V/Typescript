// Function that accepts a string or a number and formats it as a string
function format(input: string | number): string {
    if (typeof input === 'number') {
      return input.toFixed(2); // Format numbers to two decimal places
    } else {
      return input.trim(); // Trim whitespace from strings
    }
  }
  
  // Example usage:
  console.log(format(12557643.457647446));  // Output: "123.46"
  console.log(format(" hi iam diya Friendly and Neighbourhood spidy-girl  ")); // Output: "Hello, TypeScript!"