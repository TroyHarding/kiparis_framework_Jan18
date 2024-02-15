@demoBlaze
Feature: Demoblaze site


    @demoBlaze.1
    Scenario: End to end
        Given I login to Demoblaze as a valid user
        Then I verify header and footer is correct
        When I filter product for "Laptops" category
        # Then I should see the product "MacBook Pro"
        # When I click and navigate to the "Macbook Pro" product page
        # # Then I verify that you are on the "MacBook Pro" Product Page
        # When I add the current item to cart from the product page
        # Then I navigate to the Cart page
        # Then I verify the item "MacBook Pro" is present in the cart
        # When I click Place Order and fill out the Form with default information
        # Then I should see modal indicating a successful purchase