@para @paraNadiia
Feature: ParaBank

  @para @paraNadiia1
  Scenario: Register
    Given I open url "<baseUrl>"
    Then I click link "<register>"
    Then I interacts with the page "<register>"

  @para @paraNadiia2
  Scenario: Open New Account
    Given I open url "<baseUrl>"
    Then I login as a "<valid_user>"
    Then I interacts with the page "<open_new_account>"

  @para @paraNadiia3
  Scenario: Transfer Funds
    Given I open url "<baseUrl>"
    Then I login as a "<valid_user>"
    Then I interacts with the page "<transfer_funds>"