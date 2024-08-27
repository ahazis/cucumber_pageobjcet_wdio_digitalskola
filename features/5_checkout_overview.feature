@overviewTest
Feature: Overview Test
  Background:
    Given User on the login page
    When User login with username "standard_user" and password "secret_sauce"

  @positive @testCase8
  Scenario: Test case 8 = Overview action and assert
    When User into overview page
    Then User should be on Checkout: Complete!