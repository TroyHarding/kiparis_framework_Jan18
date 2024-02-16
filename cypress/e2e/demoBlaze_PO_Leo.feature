@demo
Feature: Demoblaze site


    @demo1
    Scenario: Valid Login
        Given I login to Demoblaze as a valid user
        Then I check header
        Then I check footer
        Then I check categories

    @demo2
    Scenario: Product
        Given I choose category
        Then I verify the product
        Then I add product to cart

    @demo3
    Scenario: Cart
        Given I choose category
        Then I verify the product
        Then I add product to cart
        Given I click cart
        Then I verify product was added
        Then I verify delete button
        Then I verify existence of total
        Then I click Place Order
        Then I process the purchase

