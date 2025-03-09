const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the service
  category: { type: String, required: true }, // Category (e.g., Electrician, Plumber)
  location: { type: String, required: true }, // Location of the service provider
  description: { type: String, required: true }, // Description of the service
  createdAt: { type: Date, default: Date.now }, // Timestamp of when the service was created
});

module.exports = mongoose.model("Service", serviceSchema);