const validator = require("validator");
const logger = require("../config/loggerConfig");

const validateCruxRequest = (req, res, next) => {
  const { urlParam, requestType, urlData } = req.query;

  logger.info(
    `in middle ware ${urlParam} ${requestType} ${urlData} ${JSON.stringify(
      req.query
    )}`
  );
  // Validate URL:
  if (!urlParam || !validator.isURL(urlParam)) {
    return res.status(400).json({ error: "Invalid or missing URL parameter." });
  }

  // Validate request type:
  if (
    !requestType ||
    !["queryHistoryRecord", "queryRecord"].includes(requestType)
  ) {
    return res.status(400).json({ error: "Invalid or missing request type." });
  }

  // If all validations pass, proceed to next middleware or route handler:
  next();
};

module.exports = validateCruxRequest;
