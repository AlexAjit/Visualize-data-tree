// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  
  // Enable coverage collection
  collectCoverage: true,
  
  // Specify the directory where coverage files will be saved
  coverageDirectory: "<rootDir>/coverage",  // Set coverage folder relative to project root
  
  // Choose which files to collect coverage for
  collectCoverageFrom: [
    "src/**/*.{js,ts,jsx,tsx}",  // Collect coverage from all files in src folder
    "!src/**/*.d.ts",  // Exclude TypeScript declaration files
  ],

  // Specify the coverage reporters
  coverageReporters: ["text", "lcov", "clover"],  // You can adjust these based on your needs
};

module.exports = createJestConfig(customJestConfig)