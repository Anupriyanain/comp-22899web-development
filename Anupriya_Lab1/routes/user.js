// Define a user object with properties
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com',
    isAdmin: false,
    hobbies: ['Reading', 'Gaming', 'Traveling'],
  };
  
  // Function to get the full name of the user
  function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
  
  // Function to check if the user is an admin
  function isAdminUser(user) {
    return user.isAdmin;
  }
  
  // Export the user object and functions
  module.exports = {
    user,
    getFullName,
    isAdminUser,
  };
  