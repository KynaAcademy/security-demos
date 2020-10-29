const bunyan = require("bunyan");

// Imports the Google Cloud client library for Bunyan
const { LoggingBunyan } = require("@google-cloud/logging-bunyan");

// Creates a Bunyan Stackdriver Logging client
const loggingBunyan = new LoggingBunyan();

// Create a Bunyan logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/bunyan_log"
const logger = bunyan.createLogger({
  // The JSON payload of the log as it appears in Stackdriver Logging
  // will contain "name": "my-service"
  name: "security-labs",
  streams: [
    // Log to the console at 'info' and above
    { stream: process.stdout, level: "info" },
    // And log to Stackdriver Logging, logging at 'info' and above
    loggingBunyan.stream("info"),
  ],
});

module.exports = logger;
