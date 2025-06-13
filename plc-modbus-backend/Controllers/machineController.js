const MachineReading = require("../models/MachineReading");

const getMachineReadings = async (req, res) => {
  try {
    const { machineId } = req.params;
    const data = await MachineReading.find({ machineId }).sort({ timestamp: -1 }).limit(100);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getMachineReadings };
