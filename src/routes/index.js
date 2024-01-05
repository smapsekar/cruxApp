// src/routes/index.js
const express = require("express");
const cruxRoute = require("./cruxRoute");
const validateCruxRequest = require("../middleware/validateCruxRequest");

const router = express.Router();

router.use("/crux-report", validateCruxRequest);
router.use("/", cruxRoute);

module.exports = router;
