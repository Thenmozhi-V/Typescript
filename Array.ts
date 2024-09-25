// Define the function with parameter type annotation and return type
function sumArray(numbers: number[]): number {
    // Use the reduce method to calculate the sum of the array
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Example usage:
  const nums = [1, 2, 72, 89, 5];
  console.log(sumArray(nums));