const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create a booking
router.post("/", async (req, res) => {
  const { userId, serviceId, date, time } = req.body;
  try {
    const newBooking = new Booking({ userId, serviceId, date, time, status: "Pending" });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// Update booking status
router.put("/:id", async (req, res) => {
  const { status } = req.body;
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: "Failed to update booking" });
  }
});

module.exports = router;