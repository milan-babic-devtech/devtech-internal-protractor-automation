var Navigation  = {
    // Page Elements
    logo: element(by.css('.navbar-inner a.logo')),
    
    // Navigation
    navigateToHomePage: function(){
        this.logo.click();
        browser.sleep(3000);
    },
    // Action
    
};
module.exports = Navigation;