import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/LoginPage";
import SignupPage from "../pageObjects/SignupPage";

const loginPage = new LoginPage();
const signupPage = new SignupPage();

Given('I am on the login page', () => {
    loginPage.visit();
    loginPage.goToLogin();
    loginPage.verifyLoginForm();
});

When('I login with valid credentials', function () {
    cy.fixture('example').then((data) => {
        loginPage.enterEmail(data.login.validEmail);
        loginPage.enterPassword(data.login.validPassword);
        loginPage.clickLogin();
    });
});

Then('I should be able to logout successfully', () => {
    loginPage.verifyLogoutVisible();
    loginPage.clickLogout();
    loginPage.verifyLoggedOut();
});

When('I try to login with invalid credentials {string} and {string}', (email, password) => {
    loginPage.loginWithInvalidCredentials(email, password);
});

Then('I should see the login error message {string}', (message) => {
    loginPage.verifyLoginError(message);
});

When('I try to signup with existing email {string} and {string}', (name, email) => {
    signupPage.signupWithExistingEmail(name, email);
});

Then('I should see the signup error message {string}', (message) => {
    signupPage.verifySignupError(message);
});