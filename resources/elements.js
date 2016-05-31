// This file should be used if we decide to use external source for element locators which should be useful for use in both projects at once
var Elements = {
//    Header
    logo: element(by.css('.navbar-inner a.logo'))
/*//    login page
    loginNameInput: element(by.css('#username')),
	loginPasswordInput: element(by.css('#password')),
	loginButton: element(by.css('#id15')),
//    navigation
    navMyApps: element(by.css('#myapps')),
    navMarketplace: element(by.css('#shop')),
    navDeveloper: element(by.css('#developer')),
    navManage: element(by.css('#manage')),
    navAccount: element(by.css('#account')),
    navDashboard: element(by.linkText('Dashboard')),
    navProducts: element(by.linkText('Products')),
    navIntegrationEvents: element(by.linkText('Integration Events')),
//    create new product
    addProductsButton: element(by.buttonText('Add Products')),
    productNameInput: element(by.css('#appNameField')),
    domainProviderTypeRadio: element(by.xpath("//label[contains(text(),'Domain Provider')]")),
    webAppTypeRadio: element(by.xpath("//label[contains(text(),'Web App')]")),
    referalOnlyTypeRadio: element(by.css('#referal')),
    fullIntegrationTypeRadio: element(by.css('#fullIntegration')),
    singleUserModelRadio: element(by.css('#singleUser')),
    multipleUsersModelRadio: element(by.css('#multiUser')),
    freeModelRadio: element(by.css('#free')),
    recurringModelRadio: element(by.css('#recurring')),
    termsAndConditionsCheck: element(by.css("#termsAndConditions")),
    createProductButton: element(by.buttonText('Create Product')),
//    edit integration page
    editIntegrationButton: element(by.linkText('Edit Integration')),
    subscriptionCreateInput: element(by.xpath("//label[contains(text(), 'Subscription Create Notification URL')]/following-sibling::span/input")),
    subscriptionChangeInput: element(by.xpath("//label[contains(text(), 'Subscription Change Notification URL')]/following-sibling::span/input")),
    subscriptionCancelInput: element(by.xpath("//label[contains(text(), 'Subscription Cancel Notification URL')]/following-sibling::span/input")),
    subscriptionStatusInput: element(by.xpath("//label[contains(text(), 'Subscription Status Notification URL')]/following-sibling::span/input")),
    userAssignmentInput: element(by.xpath("//label[contains(text(), 'User Assignment Notification URL')]/following-sibling::input")),
    userUnassignmentInput: element(by.xpath("//label[contains(text(), 'User Unassignment Notification URL')]/following-sibling::input")),
    saveIntegrationButton: element(by.buttonText('Save')),
    oAuthSecret: element(by.xpath("//label[contains(text(), 'OAuth Consumer Secret')]/following-sibling::div/p")),
    oAuthKey: element(by.xpath("//label[contains(text(), 'OAuth Consumer Key')]/following-sibling::p")),
    
//    edit authentication
    editAuthenticationButton: element(by.linkText('Edit Authentication')),
    loginUrlInput: element(by.xpath("//span[contains(text(), 'Login URL')]/following-sibling::div/input")),
//    editions
    editionsList: element(by.css('#editionsAndPricing > div:nth-child(1) > ul')),
    editionsButton: element(by.css('#editionsAndPricing > div:nth-child(1) > a')),
    addNewEditionButton: element(by.linkText('Add New Edition')),
    planNameInput: element(by.xpath("//span[contains(text(),'Plan name')]/following-sibling::div/span/input")),
    editionCodeInput: element(by.xpath("//span[contains(text(),'Edition code')]/following-sibling::div/span/input")),
    freeModelEdition: element(by.css('#revenueGroup > div:nth-child(2) > label > div > input')),
    recurringModelEdition: element(by.css('#revenueGroup > div:nth-child(5) > label > div > input')),
    freeEditionLengthInput: element(by.xpath("//label[contains(text(),'Free Edition length:')]/following-sibling::input")),
    quantityInput: element(by.xpath("//span[contains(text(), 'Quantity')]/following-sibling::div/span/input")),
    savePlanButton: element(by.buttonText('Save Plan')),
    savedEditionMsg: element(by.xpath("//span[contains(text(), 'Your pricing edition has been saved.')]"))*/
};
module.exports = Elements;