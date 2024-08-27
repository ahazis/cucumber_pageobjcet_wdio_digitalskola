@HomepageTest
Feature: Homepage Test
  Background:
    Given User on the login page
    When User login with username "standard_user" and password "secret_sauce"

  @positive @testCase4
  Scenario: Test case 4 = homepage action and assert
    When User into homepage
    Then User should be on cartpage