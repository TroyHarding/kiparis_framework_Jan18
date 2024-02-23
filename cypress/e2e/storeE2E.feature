@store_qa_e2e
Feature: User navigates and interacts with the online store

  @store_qa_e2e_homepage
  Scenario: Viewing the homepage
    Given I am on the homepage
    Then I should see product categories including "Mac", "iPhone", "Watch", and "Accessories"
    And I should see featured products for sale

  @store_qa_e2e_category
  Scenario: Browsing a product category
    Given I am on the homepage
    When I click on the "iPhone" category
    Then I should be taken to the iPhone products page
    And I should see a list of iPhone products

  @store_qa_e2e_product_details
  Scenario: Viewing a product's details
    Given I am on the iPhone products page
    When I click on a product named "IPhone XR"
    Then I should see the product's detail page
    And I should see the price and product description

  @store_qa_e2e_add_to_cart
  Scenario: Adding a product to the cart
    Given I am viewing a product's detail page
    When I click on "Add to cart"
    Then the product should be added to the cart
    And I should see the cart's item count increase

  @store_qa_e2e_checking_out
  Scenario: Checking out
    Given I have added a product to the cart
    When I navigate to the cart page
    And I click on "Checkout"
    Then I should be taken to the checkout page
    And I should be prompted to enter my shipping and payment information

  @store_qa_e2e_purchase
  Scenario: Completing a purchase
    Given I am on the checkout page
    When I enter my shipping and payment information
    And I click on "Place order"
    Then my order should be processed
    And I should see a confirmation message with my order details

  @store_qa_e2e_log_in
  Scenario: Logging into an account
    Given I am on the homepage
    When I click on "My account"
    And I enter my login credentials
    And I click on "Login"
    Then I should be logged into my account
    And I should see my account details

  @store_qa_e2e_search
  Scenario: Searching for a product
    Given I am on the homepage
    When I use the search function to find a product named "AirPods Pro"
    Then I should see search results related to "AirPods Pro"


