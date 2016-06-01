var navigation = Object.create(require("../pages/navigation.js"));
var homepage = Object.create(require("../pages/homepage.js"));
var footer = Object.create(require("../pages/footer.js"));

describe('Devtech homepage', function () {
   
    it('should verify that it is possible to navigate to home page', function () {
        browser.get(homepage.url);
        homepage.navigateToHomePage();
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(homepage.url);
        })
    });
});