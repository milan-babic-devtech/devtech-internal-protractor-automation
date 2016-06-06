var navigation = Object.create(require("../pages/navigation.js"));

describe('Devtech site navigation', function () {
    
    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.get(browser.params.homePageUrl);        
    });
    
    it('should verify that it is possible to navigate to home page', function () {
        navigation.navigateToHomePage();
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(browser.params.homePageUrl);
        });
    });
    
});