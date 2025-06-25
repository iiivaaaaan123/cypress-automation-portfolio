import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../pageObjects/SignupPage";

const signupPage = new SignupPage();

Given('I am on the signup page', () => {
    signupPage.visit();
    signupPage.goToSignup();
});

When('I fill the signup form with valid details', function () {
    cy.fixture('example').then((data) => {
        const signup = data.signup;
        const randomNum = Math.floor(Math.random() * (2000 - 5 + 1)) + 5;
        const email = `victor3.ivanvelasquez+${randomNum}@gmail.com`;
        signupPage.enterName(signup.name);
        signupPage.enterEmail(email);
        signupPage.clickSignupButton();
        signupPage.selectGender();
        signupPage.enterPassword(signup.password);
        signupPage.selectDOB(signup.dob.day, signup.dob.month, signup.dob.year);
        signupPage.checkNewsletter();
        signupPage.checkOptin();
        signupPage.enterFirstName(signup.firstName);
        signupPage.enterLastName(signup.lastName);
        signupPage.enterCompany(signup.company);
        signupPage.enterAddress(signup.address);
        signupPage.enterAddress2(signup.address2);
        signupPage.selectCountry(signup.country);
        signupPage.enterState(signup.state);
        signupPage.enterCity(signup.city);
        signupPage.enterZipcode(signup.zipcode);
        signupPage.enterMobile(signup.mobile);
        signupPage.clickCreateAccount();
    });
});

Then('My account should be created successfully', () => {
    signupPage.clickContinue();
    // Add assertion here if there is a success message or landing page
});
