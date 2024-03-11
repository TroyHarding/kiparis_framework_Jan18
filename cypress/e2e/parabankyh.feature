@para @paraYuliiaH
Feature: ParaBank

  Feature Description



  @para1 @paraYuliiaH1
  Scenario: Register
  Given I navigate to parabank main page
  When I register new user
  Then I verify  the user exists



  @para2 @paraYuliiaH2
  Scenario: Open New Account
    Given I log in to parabank with valid Account
    When I open new "SAVINGS" Account
    Then verify new account created




  @para2 @paraYuliiaH2
  Scenario: Tranfer Funds
