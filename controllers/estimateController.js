const Estimate = require('../models/Estimate');

// Create a new estimate  1





const createEstimate = async (req, res) => {
  try {
    const newEstimate = new Estimate(req.body);
    await newEstimate.save();
    res.status(201).json({ message: 'Estimate created successfully!' });
  } catch (error) {
    console.error('Error creating estimate:', error.message);
    res.status(500).json({ error: 'Server error while creating estimate' });
  }
};

// Get all estimates
const getEstimates = async (req, res) => {
  try {
    const estimates = await Estimate.find();
    res.status(200).json(estimates);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving estimates', error: error.message });
  }
};

// Get estimate by ID
const getEstimateById = async (req, res) => {
  try {
    const estimate = await Estimate.findById(req.params.id);
    if (!estimate) {
      return res.status(404).json({ message: 'Estimate not found' });
    }
    res.status(200).json(estimate);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving estimate', error: error.message });
  }
};

// Update estimate by ID
const updateEstimate = async (req, res) => {
  try {
    const updatedEstimate = await Estimate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEstimate) {
      return res.status(404).json({ message: 'Estimate not found' });
    }
    res.status(200).json(updatedEstimate);
  } catch (error) {
    res.status(500).json({ message: 'Error updating estimate', error: error.message });
  }
};

// Delete estimate by ID
const deleteEstimate = async (req, res) => {
  try {
    const deletedEstimate = await Estimate.findByIdAndDelete(req.params.id);
    if (!deletedEstimate) {
      return res.status(404).json({ message: 'Estimate not found' });
    }
    res.status(200).json({ message: 'Estimate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting estimate', error: error.message });
  }
};

module.exports = {
  createEstimate,
  getEstimates,
  getEstimateById,
  updateEstimate,
  deleteEstimate,
};