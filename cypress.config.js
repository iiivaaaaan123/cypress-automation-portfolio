const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

 async function setupNodeEvents(on,config)
 {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
 }


module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com",
    nopURL: "https://demo.nopcommerce.com/",
    username_nopdemo: "victor1.ivanvelasquez@gmail.com",
    password_nopdemo: "#HimikoToga1334"
  },
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 0,

  },
  projectId: "nodpcq",


  e2e: {
  setupNodeEvents,
    //specPattern: 'cypress/integration/examples/*.js',
    experimentalStudio: true,
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
