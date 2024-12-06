Feature: Test Login Functionality

  Scenario: Check Login with valid credentials
    Given user is on Login page
    When user enters username and password
    Then clicks on login button
    Then user is navigated to home page
