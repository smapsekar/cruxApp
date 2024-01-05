// src/routes/cruxRoute.js
const express = require("express");
const { fetchCruxData } = require("../controllers/cruxController");
const logger = require("../config/loggerConfig");
const validator = require("validator");

const router = express.Router();

const QUERY_HISTORY_RECORD = "queryHistoryRecord";
const QUERY_RECORD = "queryRecord";

router.get("/crux-report", async (req, res) => {
  try {
    const urlParam = req.query.urlParam;
    const requestType = req.query.requestType;
    const urlData = req.query.data;

    logger.info(
      `urlParam: ${urlParam} requestType ${requestType} ${JSON.stringify(
        req.query
      )}`
    );
    if (requestType === QUERY_HISTORY_RECORD) {
      if (!validator.isURL(urlParam)) {
        return res
          .status(400)
          .json({ error: "Invalid or missing URL parameter." });
      }
    } else if (requestType === QUERY_RECORD) {
      if (!requestType) {
        return res
          .status(400)
          .json({ error: "Invalid or missing URL parameter." });
      }
    }

    //const sanitizedURL = validator.escape(urlParam);

    const data = await fetchCruxData(urlParam, requestType, urlData);

    if (!data) {
      return res
        .status(404)
        .json({ error: "No data found for the provided URL." });
    }

    //const data = await fetchCruxData();
    res.json(data);
  } catch (error) {
    logger.error(`Error handling request: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
