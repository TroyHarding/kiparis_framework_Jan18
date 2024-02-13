@shopping
Feature: Shopping

  @shopping1
  # Scenario: My Girlfriend needs a new bag
  #  Given I open url "https://www.marcjacobs.com/"
    # Then I should see page title as "Marc Jacobs | Official Site"
  #               #Then I wait for element with selector "div[id='bx-element-1979246-zO4AKxX'] button[aria-label='DECLINE OFFER; close the dialog']" to be present
  #   Then I wait for element with selector ".onetrust-close-btn-handler.banner-close-button.ot-close-link" to be present
    
  #    Then I click on element with selector ".onetrust-close-btn-handler.banner-close-button.ot-close-link"
  #    Then I click on element with selector "button[aria-label='search Marcjacobs']"
  #    Then element with selector "input[placeholder='SEARCH For something you love']" should be present
  #   When I type "THE LEATHER TOTE BAG" into element with selector "input[placeholder='SEARCH For something you love']"
  #                 #   Then I wait for 15 sec
    # Then I click on element with selector ".view-all"
    # Then I wait for element with selector ".product-grid" to be present
    #  Then element with selector ".product-grid" should contain text "Leather Mini Tote Bag"

  # @shopping2
  # Scenario: Find me a nice Coach belt
    # Given I open url "https://coach.com"
    
    # Then I should see page title as "COACH® Official Site - Designer Handbags, Wallets, Clothing, Menswear, Shoes &amp; More"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   When I type "Signature Belt" into element with selector "selector"
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Signature Buckle Belt"

  # @shopping3
  # Scenario: I want some new leather shoes
    #Given I open url "https://www.ferragamo.com/"
  #   Then I should see page title as "Ferragamo United States | Official Online Store"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   Then element with selector "//input[@type='search']" should be present
  #   When I type "Leather Moccasin" into element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Moccasin with Gancini ornament"

  # @shopping4
  # Scenario: Mothers Day is Comming up
   # Given I open url "https://www.cartier.com/"
  #   Then I should see page title as "Cartier® Official Website - Jeweler and Watchmaker since 1847"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   Then element with selector "selector" should be present
  #   When I type "Love Bracelet" into element with selector "selector"
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Love Bracelet"

  # @shopping5
  # Scenario: Get those Balenciaga ugly sneakers
    #  Given I open url "https://www.balenciaga.com/"
    #  Then I should see page title as "Balenciaga Official Online Boutique US"
    # Then I wait for element with selector "#onetrust-reject-all-handler" to be present
    # Then I click on element with selector "#onetrust-reject-all-handler"
  #   When I type "Speed Sneaker" into element with selector "selector"
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Speed Sneaker"

  # @shopping6
  # Scenario: Get that Chanel No 5 thing
  #   Given I open url "https://www.chanel.com/us"
  #   Then I should see page title as "CHANEL Official Website: Fashion, Fragrance, Beauty, Watches, Fine Jewelry | CHANEL"
  #   Then I wait for element with selector "selector" to be present
  #   Then I click on element with selector "selector"
  #   Then element with selector "selector" should be present
  #   When I type "NO 5" into element with selector "selector"
  #   Then I click on element with selector "selector"
  #   Then I wait for element with selector "selector" to be present
  #   Then element with selector "selector" should contain text "Eau de Parfum Spray"
@shopping5
Scenario: Get those Balenciaga ugly sneakers
  Given I open url "https://www.balenciaga.com/"
  Then I should see page title as "Balenciaga Official Online Boutique US"
  Then I wait for element with selector "button[id=onetrust-accept-btn-handler]" to be present
  Then I click on element with selector "button[id=onetrust-accept-btn-handler]"
  Then I wait for element with selector "input[data-ref=topSearchInput]" to be present
  When I type "Speed Sneaker" into element with selector "input[data-ref=topSearchInput]"
  Then I click on element with selector "button[data-ref=submitBtn]"
  # Then I wait for element with selector "button[data-ref=closePopinTrigger]" to be present
  # Then I click on element with selector "button[data-ref=closePopinTrigger]"
  Then I wait for element with selector "main[id=main-content]" to be present
   Then element with selector "main[id=main-content]" should contain text "Speed Sneaker"
  
  
  
  
  