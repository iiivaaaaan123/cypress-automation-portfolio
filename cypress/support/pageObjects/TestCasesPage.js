class TestCasesPage {
    goToTestCases() {
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    }
    verifyTestStepsHeader() {
        cy.get('h5').contains('Test Steps');
    }
    expandTestStepPanel() {
        cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u').click();
    }
    verifyLaunchBrowserStep() {
        cy.get('#collapse1 > .list-group > :nth-child(1)').contains('Launch browser');
    }
}
export default TestCasesPage;