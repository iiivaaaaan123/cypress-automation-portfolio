class ProductPage
{
    pageValidation(){
        cy.contains('Shop Name').should('be.visible')
    }
    getCardCount(){
        return cy.get('app-card')
    }

    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }

    goToCart(){
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }
    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()
            })
    }
    visit() {
        cy.visit('https://www.automationexercise.com/');
    }
    goToProducts() {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    }
    verifyProductsTitle() {
        cy.get('.title').should('have.text', 'All Products');
    }
    selectThirdProduct() {
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    }
    verifyProductDetails() {
        cy.get('.product-information > h2').should('have.text', 'Blue Top');
        cy.get('.product-information').should('contain.text', 'Rs. 500');
        cy.get('.product-information > p').should('contain.text', 'In Stock');
    }
}
export default ProductPage;