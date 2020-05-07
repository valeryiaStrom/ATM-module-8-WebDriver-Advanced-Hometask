exports.config = {
  capabilities: {
    'browserName': 'chrome',
  },
  directConnect: true,
  framework: 'mocha',
  specs: [
    '../specs/*.js'
  ],
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};
