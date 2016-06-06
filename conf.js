// JavaScript source code
//var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    // This line specifies version of Jasmine to use instead of the default 1.3
    framework: 'jasmine2',

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

    specs: [
        // 'specs/navigation-spec.js',
        // 'specs/homepage-spec.js',
        // 'specs/contact-us-spec.js'
    ],
    // run specific suites with 'protractor conf.js --suite navigate,contactUsPage'
    suites: {
        navigate: 'specs/navigation-spec.js',
        homepage: 'specs/homepage-spec.js',
        contactUsPage: 'specs/contact-us-spec.js'
    },
    
    // accessed with browser.params
    params: {
        homePageUrl: 'http://192.168.88.226/',
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        // Use colors in the command line report.
        showColors: true, 
        print: function () { }
    },

    onPrepare: function() {
        //    browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;
        global.bd = browser.driver; //accessed with global.bd

        // add jasmine spec reporter: 'npm install jasmine-spec-reporter --save-dev' in the root folder of the test
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   }
} 
