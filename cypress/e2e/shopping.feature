@shopping
Feature: Shopping

   @shopping1
   Scenario: My Girlfriend needs a new bag
     Given I open url "https://www.marcjacobs.com/"
     Then I should see page title as "Marc Jacobs | Official Site"
     # Then I wait for element with selector "#bx-form-1896409-step-1" to be present
     Then I wait for element with selector "#onetrust-button-group-parent" to be present
     Then I click on element with selector "#onetrust-button-group-parent"
     Then I click on element with selector "button[aria-label='search Marcjacobs']"
     Then element with selector "input[placeholder='SEARCH For something you love']" should be present
     When I type "THE LEATHER TOTE BAG" into element with selector "input[placeholder='SEARCH For something you love']"
     # Then I wait for 15 sec
     Then I click on element with selector ".view-all"
     Then I wait for element with selector ".product-grid__list.product-grid__list-no-offset" to be present
     Then element with selector ".product-grid__list.product-grid__list-no-offset" should contain text "Leather Mini Tote Bag"

#  @shopping2
#  Scenario: Find me a nice Coach belt
#    Given I open url "https://www.coach.com"
#    Then I should see page title as "COACH® Official Site - Designer Handbags, Wallets, Clothing, Menswear, Shoes &amp; More"
#     Then I wait for element with selector "selector" to be present
#     Then I click on element with selector "selector"
#     When I type "Signature Belt" into element with selector "selector"
#     Then I click on element with selector "selector"
#     Then I wait for element with selector "selector" to be present
#     Then element with selector "selector" should contain text "Signature Buckle Belt"

#   @shopping3
#   Scenario: I want some new leather shoes
#     Given I open url "https://www.ferragamo.com/"
#     Then I should see page title as "Ferragamo United States | Official Online Store"
#     Then I wait for element with selector "selector" to be present
#     Then I click on element with selector "selector"
#     Then element with selector "//input[@type='search']" should be present
#     When I type "Leather Moccasin" into element with selector "selector"
#     Then I wait for element with selector "selector" to be present
#     Then I click on element with selector "selector"
#     Then I wait for element with selector "selector" to be present
#     Then element with selector "selector" should contain text "Moccasin with Gancini ornament"

  # @shopping4
  # Scenario: Mothers Day is Comming up
    # Given I open url "https://www.cartier.com/"
    # Given I open url "https://www.cartier.com/en-us/home"
    #  Then I should see page title as "Cartier® Official Website - Jeweler and Watchmaker since 1847"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   Then element with selector "selector" should be present
  #   When I type "Love Bracelet" into element with selector "selector"
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Love Bracelet"

   @shopping5
   Scenario: Get those Balenciaga ugly sneakers
     Given I open url "https://www.balenciaga.com/"
     Then I should see page title as "Balenciaga Official Online Boutique US"
     Then I wait for element with selector "input[placeholder='What are you looking for?']" to be present
     When I type "Speed Sneaker" into element with selector "input[placeholder='What are you looking for?']"
     Then I click on element with selector "button[type='submit'] span[class='c-icon--search']"
     Then I wait for element with selector ".l-productgrid__wrapper" to be present
     Then I wait for 15 sec
#     Then element with selector ".l-productgrid__inner" should contain text "SPEED SNEAKER"
     Then element with selector ".c-toggleview" should contain text "SPEED SNEAKER"

#   @shopping6
#   Scenario: Get that Chanel No 5 thing
#     Given I open url "https://www.chanel.com/us"
  #   Then I should see page title as "CHANEL Official Website: Fashion, Fragrance, Beauty, Watches, Fine Jewelry | CHANEL"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   Then element with selector "selector" should be present
  #   When I type "NO 5" into element with selector "selector"
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Eau de Parfum Spray"
