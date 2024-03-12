@para @paraNadiia
Feature: ParaBank

  @para @paraNadiia1
  Scenario: Register
    Given I open para url "<baseUrl>"
    Then I click para link "<register>"
    Then I interacts with the page "<register>"

  @para @paraNadiia2
  Scenario: Open New Account
    Given I open para url "<baseUrl>"
    Then I login as "<valid_user>"
    Then I interacts with the  register page "<open_new_account>"

  @para @paraNadiia3
  Scenario: Transfer Funds
    Given I open para url "<baseUrl>"
    Then I login as "<valid_user>"
    Then I interacts with the  register page "<transfer_funds>"