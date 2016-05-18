var page = Object.create(require("../pages/page.js"));

describe('Devtech site', function () {
    browser.ignoreSynchronization = true;
   
    beforeEach(function () {
        page.setWindowSize();
    });

    it('should verify that logo in the header navigates to home page', function () {
//        browser.get(page.homePageUrl);
        browser.driver.get(browser.params.homePageUrl); //global variable bd defined in conf.js can be used instead of brwoser.driver
        page.clickLogo();
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(page.homePageUrl);
        })
    })
});