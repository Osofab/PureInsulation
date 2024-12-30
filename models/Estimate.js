// models/Estimate.js
const mongoose = require('mongoose');

const estimateSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  date: Date,
});

const Estimate = mongoose.model('Estimate', estimateSchema);

module.exports = Estimate;