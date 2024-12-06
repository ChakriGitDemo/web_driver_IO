Feature: Testing Sample Functionality

  Scenario: checking login with valid credentials
    Given user is on login page
    When user eneters username
    Then user ciccks next button
    When user enters  password
    Then user clicks signin button
    Then user navigated to next page
    Then user should see new quote button
    Then user clicks the new quote button
    When user fill quote name
    Then user click select a client button
    When user place client name
    Then user select the client
    Then user click on create button
    Then user validate the quote order message
    When user clicks the window world repository dropdown
    Then user clicks the save button for save the data
    Then  user clicks the lineitems tab
    Then  user checks the new lineitem button
    When user clicks the new lineitem button
    Then user select the new mice line
    And user enter description, dealer price and quantity
   