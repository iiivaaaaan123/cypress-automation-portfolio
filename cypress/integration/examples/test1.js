//cypress - Spec
/// <reference types="cypress" />
describe('Test Suite', () => {

    /* ==== Test Created with Cypress Studio ==== */
    it('test1', function() {
        // below code belongs to select product page 
        cy.visit('https://www.automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('have.text', 'All Products');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information > h2').should('have.text', 'Blue Top');        
        cy.get('.product-information').should('contain.text', 'Rs. 500');
        cy.get('.product-information > p').should('contain.text', 'In Stock');  
        
    });
});
