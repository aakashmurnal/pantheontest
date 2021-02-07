/// <reference types="Cypress"/>

// Product Store Page-Objects
import { productStorePage } from '../../pantheonTestPageObject/problemStatementOne';

/*
Test-Cases for Problem Statement 1st with success flow
*/
describe('Verifying end to end checkout flow for purchasing product using credit card as payment method with success flow.', () => {
    /*
        Test-Case - 01
    */
    it('Visit Demoblaze website and verify home page', () => {
        // Verify whether user able to launch the Demoblaze site or not
        cy.visit(productStorePage.url)
        // Verify Product Store name in home page
        cy.get(productStorePage.getHeaderNavBar).contains(productStorePage.headerText)
    }),
    /*
        Test-Case - 02
    */
    it('Verify whether user is able to add product to cart or not', () => {
        // Verify the product is available or not in demoblaze
        cy.get(productStorePage.getCard).contains(productStorePage.productName).click()
        // Verifying respective product page, after selecting Iphone 6 32gb mobile
        cy.get(productStorePage.getProductBody).contains(productStorePage.productName)
        // Click on Add to cart button
        cy.get(productStorePage.getProductBody).contains(productStorePage.addToCartText).click()
        // Firing window: alert event with on() method
        cy.on(productStorePage.windowAlert, (txt) => {
        // Mocha assertions
            expect(txt).to.contains(productStorePage.productAddText);
        })
    }),
    /*
        Test-Case - 03
    */
    it('Verify added product is in cart or not', () => {
        // Go to cart page
        cy.get(productStorePage.getNavigationBar).contains(productStorePage.cartText).click()

        // Verify added product is in cart or not
        cy.get(productStorePage.getProductBody).contains(productStorePage.productName)
    })
    /*
        Test-Case - 04
    */
    it('Verify user is able to Place Order or not', () => {
        // Click on Place order button
        cy.get(productStorePage.getPlaceOrderButton).contains(productStorePage.placeOrderText).click()
        // Enter User Name
        cy.get(productStorePage.getUserName).type(productStorePage.userNameText)
        // Enter Country
        cy.get(productStorePage.getCountryName).type(productStorePage.countryNameText)
        // Enter City
        cy.get(productStorePage.getCityName).type(productStorePage.cityNameText)
        // Enter Credit Card Number
        cy.get(productStorePage.getCardNumber).type(productStorePage.cardNumber)
        // Enter Expiry Month
        cy.get(productStorePage.getMonth).type(productStorePage.month) 
        // Enter Expiry Year
        cy.get(productStorePage.getYear).type(productStorePage.year)
        // Click on Purchase button
        cy.get(productStorePage.getFooter).contains(productStorePage.purchaseText).click()
        // Verify Successful text message
        cy.get(productStorePage.getPopUp).contains(productStorePage.successText)
        // Click on OK button
        cy.get(productStorePage.getConfirmButton).contains(productStorePage.okText).click()
    })
})