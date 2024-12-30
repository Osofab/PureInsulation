// routes/authRoutes.js

const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Correctly Import the controllers

console.log({ registerUser, loginUser }); // Log the imported functions to check if they're defined

const router = express.Router();

router.post('/register', registerUser); // Error occurs here if `registerUser` is undefined,  Use the defined controller function
router.post('/login', loginUser); // Error occurs here if `loginUser` is undefined, Use the defined controller function

module.exports = router;