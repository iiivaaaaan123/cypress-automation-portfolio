class LoginPage {
    visit() {
        cy.visit('https://www.automationexercise.com/');
    }
    goToLogin() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }
    verifyLoginForm() {
        cy.get('.login-form > h2').should('have.text', 'Login to your account');
    }
    enterEmail(email) {
        cy.get('[data-qa="login-email"]').clear().type(email);
    }
    enterPassword(password) {
        cy.get('[data-qa="login-password"]').clear().type(password);
    }
    clickLogin() {
        cy.get('[data-qa="login-button"]').click();
    }
    verifyLogoutVisible() {
        cy.get('a[href="/logout"]').should('have.text', ' Logout');
    }
    clickLogout() {
        cy.get('a[href="/logout"]').click();
    }
    verifyLoggedOut() {
        cy.get('.login-form > h2').should('have.text', 'Login to your account');
    }
    loginWithInvalidCredentials(email, password) {
        cy.get('[data-qa="login-email"]').clear().type(email);
        cy.get('[data-qa="login-password"]').clear().type(password);
        cy.get('[data-qa="login-button"]').click();
    }
    verifyLoginError(message) {
        cy.get('.login-form > form > p').should('have.text', message);
    }
}
export default LoginPage;