const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wpa78g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
