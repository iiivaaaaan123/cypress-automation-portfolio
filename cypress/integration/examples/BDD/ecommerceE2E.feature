Feature: User Signup and Login

  @Signup
  Scenario: Successful user signup
    Given I am on the signup page
    When I fill the signup form with valid details
    Then My account should be created successfully

  @Login
  Scenario: Login and logout successfully
    Given I am on the login page
    When I login with valid credentials
    Then I should be able to logout successfully

  @NegativeLoginSignup
  Scenario: Login with incorrect credentials and signup with existing email
    Given I am on the login page
    When I try to login with invalid credentials "victor3.ivanvelasquez@gmail.com" and "#HimikoToga1335"
    Then I should see the login error message "Your email or password is incorrect!"
    When I try to login with invalid credentials "victor2.ivanvelasquez@gmail.com" and "#HimikoToga1336"
    Then I should see the login error message "Your email or password is incorrect!"
    When I try to signup with existing email "Ivan G" and "victor3.ivanvelasquez@gmail.com"
    Then I should see the signup error message "Email Address already exist!"

  @ContactUs
  Scenario: Submit Contact Us form successfully
    Given I am on the contact us page
    When I fill the contact form with valid details
    Then I should be redirected to the home page
