"use strict";
// Create the Employee class
class Employee {
    // Constructor to initialize Employee properties
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    // Method to get employee details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: $${this.salary.toFixed(2)}`;
    }
    // Method to update employee details
    updateDetails(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
// Example usage:
const employee = new Employee('Alice', 30, 50000);
console.log(employee.getDetails()); // Output: Name: Alice, Age: 30, Salary: $50000.00
// Updating employee details
employee.updateDetails('Alice Smith', 31, 55000);
console.log(employee.getDetails()); // Output: Name: Alice Smith, Age: 31, Salary: $55000.00
