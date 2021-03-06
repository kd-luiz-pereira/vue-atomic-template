module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
  testMatch: ["**/*.spec.js", "**/*.test.js", "**/*.unit.js"],
  setupFilesAfterEnv: ["./config/tests/beforeAll.config.js"]
};
