Feature: Login

  Scenario: Successful login
    Given User opens login page
    When User enters valid credentials
    Then User is logged in successfully

  Scenario: Invalid username
    Given User opens login page
    When User enters invalid username
    Then Error message is displayed