// JavaScript source code
//var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    // This line specifies version of Jasmine to use instead of the default 1.3
    framework: 'jasmine',

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
        isVerbose: true  
        // print: function () { }
    },

    onPrepare: function() {
        //    browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;
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
