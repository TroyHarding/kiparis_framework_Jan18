@demo
Feature: Demoblaze site


    @demo1
    Scenario: Valid Login
    # Given I do stuff
    Given I log in as a valid user to demoblaze 
    
    # Check header (Logo, Buttons)  Check Footer, check footer element, and check text
    Then I verify header and footer is correct
    
    # # Make flexible, click the Category, check that you see no phones for example
    When I filter product for "Laptops" category

    # #Make it flexible, finds item in the product grid
    Then I should see the product "MacBook Pro"

    # #Click the macbook item, and make sure you are on the right page
    Given I click and navigate to the "Macbook Pro" product page

    # #click the add to cart button
    When I add the current item to cart from the product page
    
    # Click the Cart Button up on the top, make it flexible to use any items in the header
    When I navigate to the "Cart" page

    # #Check the text is inside the element, compare it
    Then I verify the item "MacBook Pro" is present in the cart

    # #click place order, and fill out all the info, the click Purchase
    When I click Place Order and fill out the Form with default information
    
    # #Verify the Modal window exists
    Then I should see modal indicating a successful purchase