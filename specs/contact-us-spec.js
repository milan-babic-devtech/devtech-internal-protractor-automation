var navigation = Object.create(require("../pages/navigation.js"));
var contactUs = Object.create(require("../pages/contact-us-page.js"));
var footer = Object.create(require("../pages/footer.js"));

describe('Devtech Contact Us page', function () {
    
    beforeAll(function(){
        browser.ignoreSynchronization = true;
    });
    
    it('should verify that the Contact Us page url is correct', function () {
        browser.get(contactUs.url);
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(contactUs.url);
        });
    });

});