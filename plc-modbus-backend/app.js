//Poll Data Periodically

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const machineRoutes = require("./routes/machineRoutes");
const { connectPLC, readPLCData } = require("./services/modbusService");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/machines", machineRoutes);

// Connect DB
connectDB();

// Connect to PLC
connectPLC().then(() => {
  setInterval(readPLCData, 5000); // Poll every 5 seconds
});

module.exports = app;
