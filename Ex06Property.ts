// Define a utility type to convert all properties of an object to string
type ToString<T> = {
    [K in keyof T]: string;
  };
  
  // Example interfaces
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Convert User properties to string
  type UserAsString = ToString<User>;
  
  // Function to demonstrate the use of the converted type
  function printUser(user: UserAsString): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
  
  // Example usage
  const userAsString: UserAsString = {
    id: '1',       // Note: All properties are now strings
    name: 'diya',
    email: 'diya07@gmail.com',
  };
  
  printUser(userAsString);
  