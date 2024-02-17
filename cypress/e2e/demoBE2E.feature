@demobe2e
Feature: DemoBlaze E2E


    @demob_header_footer
    Scenario: Verify header and footer
        Given I open url "{baseUrl}"
        Given I log in as a valid user to demoblaze
        Then I verify header and footer is correct
        When I filter product for "{category}" category
        # Given I click and navigate to the "product" product page
        # When I add the current item to cart from the product page
        # When I click Place Order and fill out the Form with default information


# @demob_product_page_phone
# Scenario: Product Page Samsung

#     Given I open url "https://demoblaze.com/"
#     When I click on element with selector "a[onclick=\"byCat('phone')\"]"
#     Then I wait for element with selector "div.col-lg-9" to be present
#     Then element with selector "div.col-lg-9" should contain text "Samsung galaxy s6" and should NOT contain text "MacBook air"
#     Then I click on element with selector "a.hrefch:contains('Samsung galaxy s6')"
#     Then the product details in element with selector "h2.name" should contain text "Samsung galaxy s6"
#     When I click on element with selector "a.btn.btn-success.btn-lg:contains('Add to cart')"
#     Then I click on element with selector "a#cartur"
#     Then the product details in element with selector "div.col-lg-8" should contain text "Samsung galaxy s6"

# @demob_product_page_notebook
# Scenario: Product Page MacBook

#     Given I open url "https://demoblaze.com/"
#     When I click on element with selector "a[onclick=\"byCat('notebook')\"]"
#     Then I wait for element with selector "div.col-lg-9" to be present
#     Then element with selector "div.col-lg-9" should contain text "MacBook air" and should NOT contain text "ASUS Full HD"
#     Then I click on element with selector "a.hrefch:contains('MacBook air')"
#     Then the product details in element with selector "h2.name" should contain text "MacBook air"
#     When I click on element with selector "a.btn.btn-success.btn-lg:contains('Add to cart')"
#     Then I click on element with selector "a#cartur"
#     Then the product details in element with selector "div.col-lg-8" should contain text "MacBook air"

# @demob_product_page_monitor
# Scenario: Product Page ASUS Full HD

#     Given I open url "https://demoblaze.com/"
#     When I click on element with selector "a[onclick=\"byCat('monitor')\"]"
#     Then I wait for element with selector "div.col-lg-9" to be present
#     Then element with selector "div.col-lg-9" should contain text "ASUS Full HD" and should NOT contain text "Samsung galaxy s6"
#     Then I click on element with selector "a.hrefch:contains('ASUS Full HD')"
#     Then the product details in element with selector "h2.name" should contain text "ASUS Full HD"
#     When I click on element with selector "a.btn.btn-success.btn-lg:contains('Add to cart')"
#     Then I click on element with selector "a#cartur"
#     Then the product details in element with selector "div.col-lg-8" should contain text "ASUS Full HD"


# @demob_categories
# Scenario: Categories
#     Given I open url "https://demoblaze.com/"
#     When I filter product for "Laptops" category




