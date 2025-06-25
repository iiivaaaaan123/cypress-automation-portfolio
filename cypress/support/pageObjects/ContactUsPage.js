class ContactUsPage {
    visit() {
        cy.visit('https://www.automationexercise.com/');
    }
    goToContactUs() {
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    }
    verifyContactFormHeader() {
        cy.get('.contact-form > h2').should('have.text', 'Get In Touch');
    }
    enterName(name) {
        cy.get('[data-qa="name"]').type(name);
    }
    enterEmail(email) {
        cy.get('[data-qa="email"]').type(email);
    }
    enterSubject(subject) {
        cy.get('[data-qa="subject"]').type(subject);
    }
    enterMessage(message) {
        cy.get('[data-qa="message"]').type(message);
    }
    submitForm() {
        cy.get('[data-qa="submit-button"]').click();
    }
    clickHomeButton() {
        cy.get('#form-section > .btn').click();
    }
    verifyHomePageHeader() {
        cy.get('.active > :nth-child(1) > h1').contains('Automation');
    }
}
export default ContactUsPage;