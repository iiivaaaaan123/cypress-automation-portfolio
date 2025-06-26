import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TestCasesPage from "../pageObjects/TestCasesPage";

const testCasesPage = new TestCasesPage();

Given('I am on the Automation Exercise home page', () => {
    cy.visit('https://www.automationexercise.com/');
});

When('I navigate to the Test Cases page', () => {
    testCasesPage.goToTestCases();
});

Then('I should see the Test Steps section', () => {
    testCasesPage.verifyTestStepsHeader();
});

When('I expand the second test step panel', () => {
    testCasesPage.expandTestStepPanel();
});

Then('I should see the Launch browser step', () => {
    testCasesPage.verifyLaunchBrowserStep();
});