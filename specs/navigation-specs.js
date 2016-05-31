var navigation = Object.create(require("../pages/navigation.js"));

describe('Devtech site navigation', function () {
    
    it('should verify that it is possible to navigate to home page', function () {
        browser.get(browser.params.homePageUrl);
        navigation.navigateToHomePage();
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(browser.params.homePageUrl);
        });
    });
});