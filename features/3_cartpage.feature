@CartpageTest   
Feature: Cartpage Test
  Background:
    Given User on the login page
    When User login with username "standard_user" and password "secret_sauce"

  @positive @testCase5
  Scenario: Test case 5 = cartpage action and assert
    When User into cartpage
    Then User should be on checkout page

    