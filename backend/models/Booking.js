const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // ID of the user making the booking
  serviceId: { type: String, required: true }, // ID of the service being booked
  date: { type: Date, required: true }, // Date of the booking
  time: { type: String, required: true }, // Time of the booking
  status: { type: String, default: "Pending" }, // Booking status (Pending, Confirmed, Completed)
  createdAt: { type: Date, default: Date.now }, // Timestamp of when the booking was created
});

module.exports = mongoose.model("Booking", bookingSchema);