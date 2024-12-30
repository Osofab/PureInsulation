// controllers/authController.js

const registerUser = async (req, res) => {
    // Registration logic here
    res.status(201).json({ message: 'User registered successfully' });
  };
  
  const loginUser = async (req, res) => {
    // Login logic here
    res.status(200).json({ message: 'User logged in successfully' });
  };
  
  // Export the functions
  module.exports = {
    registerUser,
    loginUser,
  };