const QUERY_HISTORY_RECORD = "queryHistoryRecord";
const QUERY_RECORD = "queryRecord";

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
