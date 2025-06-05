module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/js"],
  setupFiles: ["<rootDir>/tests/mocks/chrome.ts"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
    "^.+\\.tsx$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
};
