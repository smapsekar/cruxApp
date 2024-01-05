module.exports = {
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    // Add this line to include isolated tests:
    "**/*-isolated-test.js",
  ],
  // ... other configurations
};
