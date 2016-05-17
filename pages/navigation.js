var elements = Object.create(require("../resources/elements.js"));
var Navigation  = (function(){
    // Page Elements
    logo: element(by.css('.navbar-inner a.logo')),
    
    // Navigation
    navigateToHomePage: function(){
        this.logo.click();
        browser.sleep(3000);
    }


}());
module.exports = Navigation;