const MachineReading = require("../models/MachineReading");

// Simulate a function that randomly generates machine data
function generateMockData() {
  const temperature = Math.floor(Math.random() * 50) + 20; // 20°C to 70°C
  const status = Math.random() > 0.3 ? "RUNNING" : "STOPPED"; // 70% running

  return { temperature, status };
}

async function readPLCData() {
  try {
    const { temperature, status } = generateMockData();

    const reading = new MachineReading({
      machineId: "PLC-01",
      temperature,
      status
    });

    await reading.save();
    console.log("Mock data saved:", reading);
  } catch (err) {
    console.error("Mock data error:", err.message);
  }
}

// No need to connect to real Modbus
async function connectPLC() {
  console.log("Simulated PLC connected.");
}

module.exports = { connectPLC, readPLCData };
