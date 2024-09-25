"use strict";
// Function to demonstrate the use of the converted type
function printUser(user) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}
// Example usage
const userAsString = {
    id: '1', // Note: All properties are now strings
    name: 'diya',
    email: 'diya07@gmail.com',
};
printUser(userAsString);
