// src/config/loggerConfig.js
const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.simple(),
    format.printf((info) => `[${info.timestamp}] ${info.message}`)
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
