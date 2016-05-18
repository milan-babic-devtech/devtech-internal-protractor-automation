// JavaScript source code
//var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        args: ['start-maximized']
        }
    },

// multiCapabilities: [{
//   'browserName': 'firefox'
// }, {
//   'browserName': 'chrome'
// }],

    specs: ['specs/spec.js'],
    
    // accessed with browser.params
    params: {
        homePageUrl: 'http://192.168.88.226/',
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        isVerbose: true
    },

    onPrepare: function() {
        global.bd = browser.driver; //accessed with global.bd
//        Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
   /*   jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: './tmp/screenshots'
        , docName: 'appDirectReport.html'
        , docTitle: 'AppDirect report'
        , cssOverrideFile: './css/style.css'
        , preserveDirectory: false
      }));*/
   }
} 
