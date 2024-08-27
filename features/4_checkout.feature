@CheckoutTest   
Feature: Checkout Test
  Background:
    Given User on the login page
    When User login with username "standard_user" and password "secret_sauce"

  @positive @testCase6
  Scenario: Test case 6 = Checkout action and assert
    When User into checkout page
    Then User should be on Checkout: Overview

