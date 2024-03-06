@para @paraOlena
Feature: ParaBank

    Feature Description



    @para1 @paraOlena1
    Scenario: Register
        Given I navigate to the default parabank page
        When I click the Register button
        When I fill out all of the required registration fields
        When I click the Register button to complete sign up





    @para2 @paraOlena2
    Scenario: Open New Account
        When I click Open New Account button
        When I select an account type
        When I select default mimimum deposit
        Then I click the Open New Account button
        Then I verify my account has been created
        Then I verify account exists on Accounts Overview tab





    @para2 @paraOlena3
    Scenario: Tranfer Funds
