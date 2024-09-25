// Define the Vehicle interface with properties
interface Vehicle {
    make: string;
    model: string;
    year: number;
  }
  
  // Create a Car class that implements the Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize the Car properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method to display the car details
    displayDetails(): void {
      console.log(`Car Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  // Example usage:
  const myCar = new Car('Toyota', 'Corolla', 2020);
  myCar.displayDetails();
  