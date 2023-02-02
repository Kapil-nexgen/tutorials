interface User {
    name: string;
    age: number;
    address: string;
  }
  
  const user: User = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St.'
  };
  
  console.warn(user.address);