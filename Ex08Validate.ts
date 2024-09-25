import * as readline from 'readline';

// Function to read and validate a number from user input
function readNumberFromInput(): Promise<number> {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Please enter a number: ', (input) => {
      rl.close();

      // Validate if the input is a number
      const number = parseFloat(input);
      if (isNaN(number)) {
        reject(new Error('Invalid number input'));
      } else {
        resolve(number);
      }
    });
  });
}

// Usage
readNumberFromInput()
  .then(number => console.log(`Valid number: ${number}`))
  .catch(err => console.error(`Error: ${err.message}`));