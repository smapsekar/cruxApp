const axios = require("axios");
const logger = require("../config/loggerConfig");

const QUERY_HISTORY_RECORD = "queryHistoryRecord";
const QUERY_RECORD = "queryRecord";
// Configuration (consider moving to a separate module)
const config = {
  apiKey: process.env.CHROME_UX_REPORT_API_KEY, // Load from environment variable
  baseUrl: "https://chromeuxreport.googleapis.com/v1/records:",
  defaultMetrics: [
    "largest_contentful_paint",
    "experimental_time_to_first_byte",
    "cumulative_layout_shift",
    "first_contentful_paint",
    "first_input_delay",
  ],
};

const fetchCruxData = async (
  sanitizedURL,
  requestType,
  metrics = config.defaultMetrics
) => {
  try {
    logger.debug(
      `Request params: ${requestType} ${sanitizedURL} ${JSON.stringify(
        metrics
      )}`
    );
    const url = `${config.baseUrl}${requestType}?key=${config.apiKey}`;
    const requestBody = {
      ...(requestType === QUERY_HISTORY_RECORD && { origin: sanitizedURL }),
      ...(requestType === QUERY_RECORD && { url: sanitizedURL }),
      metrics,
    };

    logger.info(`Fetching data from ${url}`);
    logger.debug(`Request body: ${JSON.stringify(requestBody)}`);

    const response = await axios.post(url, requestBody, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      handleApiSpecificError(error.response.status);
    } else {
      logger.error(`Internal error fetching data: ${error.message}`);
      throw new Error("Internal Server Error");
    }
  }
};

function handleApiSpecificError(statusCode) {
  switch (statusCode) {
    case 404:
      logger.error(`Data not found`);
      // Handle 404 error specifically
      break;
    case 401:
      logger.error(`Unauthorized access`);
      // Handle 401 error
      break;
    // ... handle other API error codes
    default:
      logger.error(`Unexpected API error: ${statusCode}`);
      throw new Error("API Error");
  }
}

module.exports = { fetchCruxData };
