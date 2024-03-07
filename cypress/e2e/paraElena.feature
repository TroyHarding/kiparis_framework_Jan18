@para @paraElena
Feature: ParaBank

    @para1 @paraElena1
    Scenario: Register
        Given I navigate to the default parabank page
        When I click the Register button
        When I fill out all the required register fields
        When I click the RegisterButton to complete sign up
        When I verify my account has been created
        Then I log out
        
        

    #   @para2 @paraElena2
    # Scenario: Open New Account
        # Given I login to parabank
        When I click Open New Account
        Then I verify my account is open




    #   @para3 @paraElena3
    # Scenario: Tranfer Funds



