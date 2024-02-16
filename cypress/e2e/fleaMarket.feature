@flea
Feature: Flea Market

@flea1
Scenario: 1
Given I log in as a valid user
Then I should see page title as ""
When I filter product for "iPhone" category
Then I should see the product "iPhone"
Given I click and navigate to the "iPhone" product page
And I validate page contains the correct product "iPhone"
When I add "iPhone" to the cart from the product page
When I navigate to the "Cart" page
Then I verify the item "iphone" is present in the cart
When I click Proceed to checkout and fill out the Form with default information
When I click Place Order
Then I should see Order received confirmation

