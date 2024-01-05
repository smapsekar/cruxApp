// src/app.js

// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const logger = require("./config/loggerConfig");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3007;

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use("/", routes);

// Middleware for logging incoming requests
app.use((req, res, next) => {
  logger.info(` from the middle ware ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
