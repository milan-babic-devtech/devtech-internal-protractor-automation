var elements = Object.create(require("../resources/elements.js"));
var Page  = {
    homePageUrl: 'http://192.168.88.226/',
    logo: element(by.css('.navbar-inner a.logo')),

    setWindowSize: function () {
        browser.manage().window().setSize(1440, 1000);
    },
    clickLogo: function(){
        this.logo.click();
        browser.sleep(5000);
    },
    
    waitFor: function(el){
        browser.wait(function(){
            return el.isPresent();
        }).then(function(){
            browser.wait(function(){
                return el.isDisplayed();
            });
        });       
    },

};
module.exports = Page;