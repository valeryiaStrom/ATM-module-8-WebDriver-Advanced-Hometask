exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'w3c': false},
  },
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'mocha',
  specs: [
    '../specs/*.js'
  ],
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};
