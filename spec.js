var page = Object.create(require("./pages/page.js"));

describe('Devtech site', function () {
    browser.ignoreSynchronization = true;
   
    beforeEach(function () {
        page.setWindowSize();
    });

//    browser.driver.manage().timeouts().implicitlyWait(10000);

    it('should verify that logo in header navigates to home page', function () {
//        browser.get(page.homePageUrl);
        browser.driver.get(browser.params.homePageUrl);
        page.clickLogo();
        browser.getCurrentUrl().then(function(url){
            expect(url).toBe(page.homePageUrl);
        })
    });
    
    xit('should add new product', function(){
        page.addProduct(product.name, 'Web App', 'Full Integration', 'Multiple Users', 'Free');
        page.goToProducts();
        expect(element(by.linkText(product.name)).isPresent()).toBe(true);
    });   
    
    xit('should edit product', function(){
        page.editProduct(product.name);
        browser.sleep(2000);
    });
    
    xit('should edit product integration', function(){
      //  page.editProduct(product.name);
        
        page.editIntegration();
        page.getOAuthSecret();
    });
    
    xit('should edit product authentication', function(){
        browser.sleep(2000);
        page.editAuthentication();
    });
    
    xit('should create all editions', function(){
        page.createAllEditions();
    });
});