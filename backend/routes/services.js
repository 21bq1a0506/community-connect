const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// Add a new service
router.post("/", async (req, res) => {
  const { name, category, location, description } = req.body;
  try {
    const newService = new Service({ name, category, location, description });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ error: "Failed to add service" });
  }
});

// Get services by category
router.get("/", async (req, res) => {
  const { category } = req.query;
  try {
    const services = await Service.find({ category });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;