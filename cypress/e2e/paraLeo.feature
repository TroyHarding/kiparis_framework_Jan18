@para @paraLeo
Feature: ParaBank





  @para1 @paraLeo1
  Scenario: Register
    Given I open url "<baseUrl>"
    Then I click link "<register>"
    Then I interacts with the page "<register>"

  @para2 @paraLeo2
  Scenario: Open New Account
    Given I open url "<baseUrl>"
    Then I login as a "<valid_user>"
    Then I interacts with the page "<open_new_account>"

  @para2 @paraLeo3
  Scenario: Transfer Funds
    Given I open url "<baseUrl>"
    Then I login as a "<valid_user>"
    Then I interacts with the page "<transfer_funds>"
