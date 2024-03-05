@demob @demobproduct
Feature: DemoBlaze

    @demobproduct1
    Scenario: Product Page Samsung

        Given I open url "https://demoblaze.com/"
        When I click on element with selector "a[onclick=\"byCat('phone')\"]"
        Then I wait for element with selector "div.col-lg-9" to be present
        Then element with selector "div.col-lg-9" should contain text "Samsung galaxy s6" and should NOT contain text "MacBook air"
        Then I click on element with selector "a.hrefch:contains('Samsung galaxy s6')"
        Then the product details in element with selector "h2.name" should contain text "Samsung galaxy s6"
        When I click on element with selector "a.btn.btn-success.btn-lg:contains('Add to cart')"
        Then I click on element with selector "a#cartur"
        Then the product details in element with selector "div.col-lg-8" should contain text "Samsung galaxy s6"

    @demobproduct2
    Scenario: Product Page MacBook

        Given I open url "https://demoblaze.com/"
        When I click on element with selector "a[onclick=\"byCat('notebook')\"]"
        Then I wait for element with selector "div.col-lg-9" to be present
        Then element with selector "div.col-lg-9" should contain text "MacBook air" and should NOT contain text "ASUS Full HD"
        Then I click on element with selector "a.hrefch:contains('MacBook air')"
        Then the product details in element with selector "h2.name" should contain text "MacBook air"
        When I click on element with selector "a.btn.btn-success.btn-lg:contains('Add to cart')"
        Then I click on element with selector "a#cartur"
        Then the product details in element with selector "div.col-lg-8" should contain text "MacBook air"

    @demobproduct3
    Scenario: Product Page ASUS Full HD

        Given I open url "https://demoblaze.com/"
        When I click on element with selector "a[onclick=\"byCat('monitor')\"]"
        Then I wait for element with selector "div.col-lg-9" to be present
        Then element with selector "div.col-lg-9" should contain text "ASUS Full HD" and should NOT contain text "Samsung galaxy s6"
        Then I click on element with selector "a.hrefch:contains('ASUS Full HD')"
        Then the product details in element with selector "h2.name" should contain text "ASUS Full HD"
        When I click on element with selector "a.btn.btn-success.btn-lg:contains('Add to cart')"
        Then I click on element with selector "a#cartur"
        Then the product details in element with selector "div.col-lg-8" should contain text "ASUS Full HD"


