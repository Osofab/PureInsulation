// routes/estimateRoutes.js

const express = require('express');
const {
  createEstimate,
  getEstimates,
  getEstimateById,
  updateEstimate,
  deleteEstimate,
} = require('../controllers/estimateController');

const router = express.Router();

// Define routes for estimates
router.post('/', createEstimate); // Create a new estimate
router.get('/', getEstimates); // Get all estimates
router.get('/:id', getEstimateById); // Get estimate by ID
router.put('/:id', updateEstimate); // Update estimate by ID
router.delete('/:id', deleteEstimate); // Delete estimate by ID

module.exports = router;