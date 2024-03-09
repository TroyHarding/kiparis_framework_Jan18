@para @paraLeo
Feature: ParaBank

  @para @paraLeo1
  Scenario: Register
    Given I open new url "<baseUrl>"
    Then I click link "<register>"
    Then I interacts with the page "<register>"

  @para @paraLeo2
  Scenario: Open New Account
    Given I open new url "<baseUrl>"
    Then I login as a "<valid_user>"
    Then I interacts with the page "<open_new_account>"

  @para @paraLeo3
  Scenario: Transfer Funds
    Given I open new url "<baseUrl>"
    Then I login as a "<valid_user>"
    Then I interacts with the page "<transfer_funds>"
