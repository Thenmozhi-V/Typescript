"use strict";
// Function that accepts a User object and prints the details
function printUserDetails(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}
// Example usage:
const user = {
    id: 1,
    name: 'Thenmozhi',
    email: 'thenmozhi2242@gmail.com',
};
printUserDetails(user);
