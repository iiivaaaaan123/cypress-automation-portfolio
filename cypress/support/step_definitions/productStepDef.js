import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../pageObjects/ProductPage";

const productPage = new ProductPage();

Given('I am on the products page', () => {
    productPage.visit();
    productPage.goToProducts();
    productPage.verifyProductsTitle();
});

When('I select the third product', () => {
    productPage.selectThirdProduct();
});

Then('I should see the product details for Blue Top', () => {
    productPage.verifyProductDetails();
});