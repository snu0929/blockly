// routes/vehicleRoutes.js
const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Endpoint to get all vehicle data (route)
router.get("/route", async (req, res) => {
  try {
    const routeData = await Vehicle.find();
    res.json(routeData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to add new vehicle location
router.post("/location", async (req, res) => {
  const { latitude, longitude } = req.body;

  const vehicle = new Vehicle({
    latitude,
    longitude,
  });

  try {
    const newVehicleLocation = await vehicle.save();
    res.status(201).json(newVehicleLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
