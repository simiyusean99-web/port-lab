module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom"],

  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.cjs"
  }
};