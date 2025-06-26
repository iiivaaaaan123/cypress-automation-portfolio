# cypress-automation-portfolio
Automation portfolio: Cypress + Cucumber

This project demonstrates end-to-end automation using [Cypress](https://www.cypress.io/) with the Cucumber BDD approach and the Page Object Model (POM) design pattern.

## Features

- User Signup and Login scenarios
- Negative login and signup validation
- Contact Us form submission
- Verify Test Case page
- Data-driven testing using fixtures
- Page Object Model for maintainable code

## Project Structure

```
cypress/
  fixtures/
    example.json                # Test data for scenarios
  integration/
    examples/
      BDD/
        ecommerceE2E.feature    # Gherkin feature file
  support/
    pageObjects/                # Page Object classes
    step_definitions/           # Step definition files
```

## How to Run

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Open Cypress Test Runner**
   ```bash
   npx cypress open
   ```

3. **Run tests in headless mode**
   ```bash
   npx cypress run
   ```

## Writing Scenarios

- Feature files are written in Gherkin syntax (`.feature`).
- Step definitions map Gherkin steps to Cypress commands and Page Object methods.
- Test data is managed in `cypress/fixtures/example.json`.

## Example Scenario

```gherkin
@Signup
Scenario: Successful user signup
  Given I am on the signup page
  When I fill the signup form with valid details
  Then My account should be created successfully
```

## Contributing

Feel free to fork this repo and submit pull requests!

---

**Happy Testing!**
