@LoginTest
Feature: Login Test
  Background:
    Given User on the login page

  @positive @testCase1
  Scenario: Test case 1 = Successful Login
    When User login with username "standard_user" and password "secret_sauce"
    Then User should be on homepage

  
  @negative @testCase2
  Scenario: Test case 2 = Failed Login
    When User login with username "<username>" and password "<password>"
    Then User should see an error message "Epic sadface: Username and password do not match any user in this service"
    Examples:
      | username | password |
      | standard_user | 1 |

  @negative @testCase3
  Scenario: Test case 3 = Failed Login with null username and password
    When User login with username "<username>" and password "<password>"
    Then User should see an error message "Epic sadface: Username is required"
    Examples:
      | username | password |
      |          |          |