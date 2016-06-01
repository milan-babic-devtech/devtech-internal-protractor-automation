var HomePage  = {
    // Page Elements
    logo: element(by.css('.navbar-inner a.logo')),
    
    // Navigation
    url: browser.params.homePageUrl,
    navigateToHomePage: function(){
        return this.logo.click();
    }

};
module.exports = HomePage;