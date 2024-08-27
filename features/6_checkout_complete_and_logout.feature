@completeTest
Feature: Complete Test
  Background:
    Given User on the login page
    When User login with username "standard_user" and password "secret_sauce"

  @positive @testCase9
  Scenario: Test case 9 = Complete action and assert
    When User into complete page and go back home
    When User go to logout
    Then User back to the login page