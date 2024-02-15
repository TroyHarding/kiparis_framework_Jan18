@fleaMarket
Feature: FLEA Market site


    @fleaMarket.1
    Scenario: Scenario 1
        Given I login to FLEA Market as a valid user
        Then I verify the title is correct
        When I click on "Home" tab
        Then I should see the product "Airpods Pro"
        When I click and navigate to the "Airpods Pro" product page
        Then I verify that you are on the right Product Page
        When I add the "Airpods Pro" to cart from the product page
        Then I see the green message: "Airpods Pro" has been added to the cart
        When I click to the Vview cart" tab
        Then I verify the item "Airpods Pro" is present in the cart
        When I click Proceed to checkout
        Then I see in form my email address
        When I fill out the Form with default information and click Place order
        Then I should see Order recieved Page with my email in the form