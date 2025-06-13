const mongoose = require("mongoose");

const MachineReadingSchema = new mongoose.Schema({
  machineId: String,
  temperature: Number,
  status: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("MachineReading", MachineReadingSchema);
