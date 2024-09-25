// Define an interface for the User object
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Function that accepts a User object and prints the details
  function printUserDetails(user: User): void {
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
  
  // Example usage:
  const user: User = {
    id: 1,
    name: 'Thenmozhi',
    email: 'thenmozhi2242@gmail.com',
  };
  
  printUserDetails(user);
  