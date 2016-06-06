var navigation = Object.create(require("../pages/navigation.js"));
var homepage = Object.create(require("../pages/homepage.js"));
var footer = Object.create(require("../pages/footer.js"));

describe('Devtech homepage', function () {
    
    beforeAll(function(){
        browser.ignoreSynchronization = true;
    });
   
    it('should verify that the homepage url is correct', function () {
        browser.get(homepage.url);
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(homepage.url);
        });
    });
    it ('should verify that the carousel is present', function () {
        expect(homepage.carousel.isPresent()).toBe(true);
    });
});