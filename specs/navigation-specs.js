var page = Object.create(require("../pages/page.js"));
var navigation = Object.create(require("../pages/navigation.js"));

describe('Devtech site navigation', function () {
    browser.ignoreSynchronization = true;
   
    beforeEach(function () {
        page.setWindowSize();
    });

//    browser.driver.manage().timeouts().implicitlyWait(10000);

    it('should verify that it is possible to navigate to home page', function () {
       browser.get(page.homePageUrl);
        // browser.driver.get(browser.params.homePageUrl);
        navigation.navigateToHomePage();
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(page.homePageUrl);
        })
    })
});