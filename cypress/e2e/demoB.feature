@demoB
Feature: Demoblaze

  @demoB1
  Scenario: Log in with empty fields
    Given I open url "https://www.demoblaze.com/"
    Then I click on element with selector "#login2"
    Then I click on element with selector "button[onclick='logIn()']"
    
  @demo2
  Scenario: Log in with valid username and invalid password
    Given I open url "https://www.demoblaze.com/"
    Then I click on element with selector "#login2"
    When I type "nadiiazhuk" into element with selector "#loginusername"
    And I type "17391" into element with selector "#loginpassword"
    Then I click on element with selector "button[onclick='logIn()']"

  @demo3
  Scenario: Log in with invalid username
    Given I open url "https://www.demoblaze.com/"
    Then I click on element with selector "#login2"
    When I type "nadiiazhuk1" into element with selector "#loginusername"
    And I type "0000" into element with selector "#loginpassword"
    Then I click on element with selector "button[onclick='logIn()']" 

  @demo4
  Scenario: Valid Log in
    Given I open url "https://www.demoblaze.com/"
    Then I click on element with selector "#login2"
    When I type "nadiiazhuk" into element with selector "#loginusername"
    And I type "1739" into element with selector "#loginpassword"
    Then I click on element with selector "button[onclick='logIn()']"

  @demo5
  Scenario: Log out
    Given I open url "https://www.demoblaze.com/"
    Then I click on element with selector "#login2"
    When I type "nadiiazhuk" into element with selector "#loginusername"
    And I type "1739" into element with selector "#loginpassword"
    Then I click on element with selector "button[onclick='logIn()']"
    Then I click on element with selector "#logout2"