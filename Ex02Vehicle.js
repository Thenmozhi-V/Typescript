"use strict";
// Create a Car class that implements the Vehicle interface
class Car {
    // Constructor to initialize the Car properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to display the car details
    displayDetails() {
        console.log(`Car Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
// Example usage:
const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayDetails();
