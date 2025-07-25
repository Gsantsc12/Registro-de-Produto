const { defineConfig } = require('cypress');

const envConfig = require('./cypress.env.json');

module.exports = defineConfig({
  e2e: {
    baseUrl: envConfig.baseUrl, // <- aqui você "puxa" o baseUrl do cypress.env.json
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/api/*.js',
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
