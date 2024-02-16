@demo
Feature: Demoblaze site


    @demo1
    Scenario: Valid Login
        Given I login to Demoblaze as a valid user
        Then I verify header and footer is correct
        When I filter product for "Laptop" category
        Then I click and navigate to the "MacBook Pro" product page
        When I add the current item to cart from the product page
        When I navigate to the Cart page
        # Then I verify the item "MacBook Pro" is present in the cart
        When I click Place Order and fill out the Form with default information
        Then I should see modal indicating a successful purchas

    @demo2:
    Scenario: Item in The cart
        Given I open url "https://www.demoblaze.com/"
        Then I click on element with selector "#login2"
        Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
        When I type "YH" into element with selector "#loginusername"
        When I type "osprey" into element with selector "#loginpassword"
        Then I click on element with selector "button[onclick='logIn()']"
        Then I click on element with selector "div#tbodyid > div:nth-of-type(1) .card-title"
        Then I click on element with selector ".btn.btn-lg.btn-success"
        Then I wait for element with selector "a[id='cartur']" to be present
        Then I click on element with selector "a[id='cartur']"
        Then element with selector " #totalp" should contain text "360"
        Then I click on element with selector ".btn.btn-success"
        Then I wait for element with selector "div#orderModal>div>div" to be present
        When I type "Yuliia H" into element with selector "#name"
        When I type "USA" into element with selector "#country"
        When I type "Cypress" into element with selector "#city"
        When I type "55555553435567" into element with selector "#card"
        When I type "April" into element with selector "#month"
        When I type "2025" into element with selector "#year"
        Then I click on element with selector "button[onclick='purchaseOrder()']"
        Then I wait for element with selector "body > div:nth-child(19)" to be present
        Then element with selector ".lead.text-muted" should contain text "55555553435567"
        Then element with selector ".lead.text-muted" should contain text "Yuliia H"
        Then element with selector ".lead.text-muted" should contain text "360 USD"


    @demo32:
    Scenario: Delete Item
        Given I open url "https://www.demoblaze.com/"
        Then I click on element with selector "#login2"
        Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
        When I type "YH" into element with selector "#loginusername"
        When I type "osprey" into element with selector "#loginpassword"
        Then I click on element with selector "button[onclick='logIn()']"
        Then I click on element with selector "div#tbodyid > div:nth-of-type(1) .card-title"
        Then I click on element with selector ".btn.btn-lg.btn-success"
        Then I click on element with selector "a#cartur"
        Then I should see page title as "STORE"
        Then I click on element with selector "a[onclick^='deleteItem']"
        Then element with selector "#tbodyid" should NOT contain text "Samsung galaxy s6"

