Chrome User Experience Node JS wapper for google CRUX API

This project aims to create a user-friendly dashboard that visualizes and analyzes Chrome User Experience Report (CrUX) data for multiple URLs.

Key Features:

Data Visualization: Presents CrUX data in a clear and interactive table format.
Data Filtering and Sorting: Allows users to filter data based on specific metrics and thresholds, as well as sort data by columns.
Multi-URL Support: Enables users to enter multiple URLs and view their respective performance metrics in a consolidated dashboard.
Data Summarization: Calculates and displays averages and sums of relevant metrics to provide insights into overall user experience trends.
Target Audience:

Technologies Used:

NodeJS, Javascript 

License:


Additional Information:

Data Source: The CrUX dataset is publicly available through the Chrome UX Report API.
Project Structure: (Outline the main components of the project, such as data fetching, data processing, UI components, etc.)
Usage Examples: (Provide illustrative examples of how to use the dashboard for different tasks.)
Known Limitations or Issues: (Acknowledge any current limitations or potential issues that users should be aware of.)
Future Enhancements:


## Installation instruction

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) this is an api endpoit
so only can see it in browser, google api key is needed
this is a project not to be used in production

### `npm test`

Comming soon

### `npm run build`

This buillds the app

There is few other configuration you need to follow 
create a .env file in you project root folder and then 

CHROME_UX_REPORT_API_KEY="GOOGLE_API_KEY"

port is optional

PORT=3007

Post that start your application 

#### Note:This was just a in compelte project not to be used in production

#### The Google API 

The Resources on how to get the API Keys

https://developer.chrome.com/docs/crux/dashboard

https://developer.chrome.com/docs/crux/api
