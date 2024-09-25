// Define the Employee interface
interface Employee {
    id: number;
    name: string;
    position: string;
  }
  
  // Define the Manager interface
  interface Manager {
    teamSize: number;
    department: string;
  }
  
  // Create an intersection type that combines Employee and Manager
  type EmployeeManager = Employee & Manager;
  
  // Function that accepts an EmployeeManager type
  function printManagerDetails(employeeManager: EmployeeManager): void {
    console.log(`ID: ${employeeManager.id}`);
    console.log(`Name: ${employeeManager.name}`);
    console.log(`Position: ${employeeManager.position}`);
    console.log(`Team Size: ${employeeManager.teamSize}`);
    console.log(`Department: ${employeeManager.department}`);
  }
  
  // Example usage
  const manager: EmployeeManager = {
    id: 1,
    name: 'Thenmozhi',
    position: 'JavaFullStackDeveloper',
    teamSize: 15,
    department: 'WebDeveloper',
  };
  
  printManagerDetails(manager);
  // Output:
  // ID: 1
  // Name: Alice
  // Position: Project Manager
  // Team Size: 10
  // Department: Engineering