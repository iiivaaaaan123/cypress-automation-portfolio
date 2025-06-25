class SignupPage {
    visit() {
        cy.visit('https://www.automationexercise.com/');
    }
    goToSignup() {
        cy.get('a[href="/login"]').click();
    }
    enterName(name) {
        cy.get('[data-qa="signup-name"]').clear().type(name);
    }
    enterEmail(email) {
        cy.get('[data-qa="signup-email"]').clear().type(email);
    }
    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();
    }
    selectGender() {
        cy.get('#id_gender1').check();
    }
    enterPassword(password) {
        cy.get('[data-qa="password"]').clear().type(password);
    }
    selectDOB(day, month, year) {
        cy.get('[data-qa="days"]').select(day);
        cy.get('[data-qa="months"]').select(month);
        cy.get('[data-qa="years"]').select(year);
    }
    checkNewsletter() {
        cy.get('#newsletter').check();
    }
    checkOptin() {
        cy.get('#optin').check();
    }
    enterFirstName(firstName) {
        cy.get('[data-qa="first_name"]').clear().type(firstName);
    }
    enterLastName(lastName) {
        cy.get('[data-qa="last_name"]').clear().type(lastName);
    }
    enterCompany(company) {
        cy.get('[data-qa="company"]').clear().type(company);
    }
    enterAddress(address) {
        cy.get('[data-qa="address"]').clear().type(address);
    }
    enterAddress2(address2) {
        cy.get('[data-qa="address2"]').clear().type(address2);
    }
    selectCountry(country) {
        cy.get('[data-qa="country"]').select(country);
    }
    enterState(state) {
        cy.get('[data-qa="state"]').clear().type(state);
    }
    enterCity(city) {
        cy.get('[data-qa="city"]').clear().type(city);
    }
    enterZipcode(zipcode) {
        cy.get('[data-qa="zipcode"]').clear().type(zipcode);
    }
    enterMobile(mobile) {
        cy.get('[data-qa="mobile_number"]').clear().type(mobile);
    }
    clickCreateAccount() {
        cy.get('[data-qa="create-account"]').click();
    }
    clickContinue() {
        cy.get('[data-qa="continue-button"]').click();
    }
    signupWithExistingEmail(name, email) {
        cy.get('[data-qa="signup-name"]').clear().type(name);
        cy.get('[data-qa="signup-email"]').clear().type(email);
        cy.get('[data-qa="signup-button"]').click();
    }
    verifySignupError(message) {
        cy.get('.signup-form > form > p').should('have.text', message);
    }
}

export default SignupPage;
