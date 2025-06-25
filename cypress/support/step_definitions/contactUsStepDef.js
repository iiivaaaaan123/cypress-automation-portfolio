import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../pageObjects/ContactUsPage";

const contactUsPage = new ContactUsPage();

Given('I am on the contact us page', () => {
    contactUsPage.visit();
    contactUsPage.goToContactUs();
    contactUsPage.verifyContactFormHeader();
});

When('I fill the contact form with valid details', function () {
    cy.fixture('example').then((data) => {
        const contact = data.contactUs;
        contactUsPage.enterName(contact.name);
        contactUsPage.enterEmail(contact.email);
        contactUsPage.enterSubject(contact.subject);
        contactUsPage.enterMessage(contact.message);
        contactUsPage.submitForm();
    });
});

Then('I should be redirected to the home page', () => {
    contactUsPage.clickHomeButton();
    contactUsPage.verifyHomePageHeader();
});