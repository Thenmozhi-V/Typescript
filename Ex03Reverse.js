"use strict";
// Define a generic function reverseArray with type parameter T
function reverseArray(arr) {
    return arr.slice().reverse(); // Use slice() to create a copy and reverse() to reverse the array
}
// Example usage:
const numberArray = [0, 3, 4, 1, 0];
const reversedNumberArray = reverseArray(numberArray);
console.log(reversedNumberArray); // Output: [5, 4, 3, 2, 1]
const stringArray = ["a", "y", "l", "i"];
const reversedStringArray = reverseArray(stringArray);
console.log(reversedStringArray); // Output: ['d', 'c', 'b', 'a']
