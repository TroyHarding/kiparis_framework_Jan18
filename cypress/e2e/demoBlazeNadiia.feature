@demoBlaze
Feature: Demoblaze site


    @demoBlaze.1
    Scenario: End to end
        Given I log in as a valid user to demoblaze
        Then I verify header and footer is correct
        When I filter product for category
        Then I navigate to the product page and add to cart
        Then I verify the item is present in the cart
        When I click Place Order and fill out the Form with default information
        Then I should see modal indicating a successful purchase