/// <reference types="Cypress"/>

// Product Store Page-Objects
import { productStorePage } from '../../pantheonTestPageObject/problemStatementOne';

/*
Test-Cases for Problem Statement 1st with fail flow
*/
describe('Verifying end to end checkout flow for purchasing product using credit card as payment method with fail flow.', () => {
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
    it.skip('Verify whether user is able to add product to cart or not', () => {
        // Verify the product is available or not in demoblaze
        cy.get(productStorePage.getCard).contains(productStorePage.failProductName).click()
        // Verifying respective product page, after selecting Iphone 6 32gb mobile
        cy.get(productStorePage.getProductBody).contains(productStorePage.productName)
        // Click on Add to cart button
        cy.get(productStorePage.getProductBody).contains(productStorePage.addToCartText).click()
        // Firing window: alert event with on() method
        cy.on(productStorePage.windowAlert, (txt) => {
        // Mocha assertions
         expect(txt).to.contains(productStorePage.productAddText);
        })
    })
})