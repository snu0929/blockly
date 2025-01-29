// models/Vehicle.js
const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
