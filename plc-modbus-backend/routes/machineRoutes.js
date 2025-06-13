//Create API end points

const express = require("express");
const router = express.Router();
const { getMachineReadings } = require("../Controllers/machineController");

router.get("/:machineId/history", getMachineReadings);

module.exports = router;
