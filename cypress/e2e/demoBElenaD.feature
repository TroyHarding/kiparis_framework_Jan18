@demob
Feature: Demo Blaze E2E


@demob3
    Scenario: E2E 
    Given I log in as a valid user to demoblaze
    Then I verify header and footer is correct
    When I filter product for "Laptops" category
    Then I should see the product "MacBook Pro"
    Given I click and navigate to the "Macbook Pro" product page
    When I add the current item to cart from the product page
    When I navigate to the Cart page
    Then I verify the item "MacBook Pro" is present in the cart
    When I click Place Order and fill out the Form with default information
    Then I should see modal indicating a successful purchase
    


# @demob
# Feature: Demo Blaze P0 and P1

  ###############  LOG IN  ##################

  # @demob_LogIn_1
  # Scenario: Log in with empty fields
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#login2"
  #   Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
  #   When I click on element with selector "button[onclick='logIn()']"
  #   I check the alert text is "Please fill out Username and Password."
  #   Then I accept alert

  # @demob_LogIn_2
  # Scenario: Log in with valid username and invalid password
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#login2"
  #   Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
  #   When I type "Kiparis" into element with selector "#loginusername"
  #   When I type "Cypressss" into element with selector "#loginpassword"
  #   When I click on element with selector "button[onclick='logIn()']"
  #   I check the alert text is "Wrong password."
  #   Then I accept alert

  # @demob_LogIn_3
  # Scenario: Log in with invalid username
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#login2"
  #   Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
  #   When I type "Kiparisss" into element with selector "#loginusername"
  #   When I type "Cypress" into element with selector "#loginpassword"
  #   When I click on element with selector "button[onclick='logIn()']"
  #   I check the alert text is "User does not exist."
  #   Then I accept alert

  # @demob_LogIn_4
  # Scenario: Valid Log in
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#login2"
  #   Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
  #   When I type "Kiparis" into element with selector "#loginusername"
  #   When I type "Cypress" into element with selector "#loginpassword"
  #   When I click on element with selector "button[onclick='logIn()']"
  #   Then I wait for 5 sec
  #   Then I should see page title as "STORE"
  #   Then I wait for element with selector "#nameofuser" to be present
  #   Then element with selector "#nameofuser" should contain text "Welcome"

  # @demob_LogIn_5
  # Scenario: Log out
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#login2"
  #   Then I wait for element with selector "div[id='logInModal'] div[class='modal-content']" to be present
  #   When I type "Kiparis" into element with selector "#loginusername"
  #   When I type "Cypress" into element with selector "#loginpassword"
  #   When I click on element with selector "button[onclick='logIn()']"
  #   Then I should see page title as "STORE"
  #   Then I wait for element with selector "#nameofuser" to be present
  #   When I click on element with selector "#logout2"
  #   Then I wait for 5 sec
  #   Then I wait for element with selector "#login2" to be present
  #   Then I wait for element with selector "#signin2" to be present


  ################  SING IN  ##############

  # @demob_SignUp_1
  # Scenario: Valid Sing up
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#signin2"
  #   Then I wait for element with selector "div[id='signInModal'] div[class='modal-content']" to be present
  #   When I type "Kiparis1" into element with selector "#sign-username"
  #   When I type "Cypress1" into element with selector "#sign-password"
  #   When I click on element with selector "button[onclick='register()']"
  #   I check the alert text is "Sign up successful."
  #   Then I accept alert
  #   # ???????????? What should be the varification for sign up?

  # @demob_SignUp_2
  # Scenario: Sing up with used username		
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#signin2"
  #   Then I wait for element with selector "div[id='signInModal'] div[class='modal-content']" to be present
  #   When I type "Kiparis1" into element with selector "#sign-username"
  #   When I type "Cypress1" into element with selector "#sign-password"
  #   When I click on element with selector "button[onclick='register()']"
  #   I check the alert text is "This user already exist."
  #   Then I accept alert

  # @demob_SignUp_3
  # Scenario: Sing up with empty fields	
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "#signin2"
  #   Then I wait for element with selector "div[id='signInModal'] div[class='modal-content']" to be present
  #   When I click on element with selector "button[onclick='register()']"
  #   I check the alert text is "Please fill out Username and Password." should appear 
  #   Then I accept alert
  
  ##########################  HOME  ####################

  # @demob_Home_1
  # Scenario: Home Page Elements	
  #   Given I open url "https://www.demoblaze.com/"
  #   # ?????????????? What is the porper selector for Home link? 
  #   When I click on element with selector "li[class='nav-item active'] a[class='nav-link']"
  #   Then I should see page title as "STORE"
  #   Then I wait for element with selector "#contcar" to be present
  #   Then I wait for element with selector ".col-lg-9" to be present
  #   Then I wait for element with selector "div[class='col-sm-4 col-lg-4 col-md-4'] h4[class='grrrr']" to be present
  #   Then element with selector "div[class='col-sm-4 col-lg-4 col-md-4'] h4[class='grrrr']" should contain text "About Us"

  #   Then I wait for element with selector "div[class='col-sm-3 col-lg-3 col-md-3'] h4[class='grrrr']" to be present
  #   Then element with selector "div[class='col-sm-3 col-lg-3 col-md-3'] h4[class='grrrr']" should contain text "Get in Touch"

  # @demob_Home_2
  # Scenario: Categories	
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "a[onclick="byCat('phone')\"]"
  #   ### a[onclick="byCat('phone')"]

  # @demob_Home_3
  # Scenario: Contact Us
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "a[data-target='#exampleModal']"
  #   Then I wait for element with selector "div[id='exampleModal'] div[class='modal-content']" to be present
  #   When I type "test@test.com" into element with selector "#recipient-email"
  #   When I type "Test" into element with selector "#recipient-name"
  #   When I type "Test" into element with selector "#message-text"
  #   When I click on element with selector "button[onclick='send()']"
  #   I check the alert text is "Thanks for the message!!" should appear 
  #   Then I accept alert

  # @demob_Home_4
  # Scenario: About
  #   Given I open url "https://www.demoblaze.com/"
  #   When I click on element with selector "a[data-target='#videoModal']"
  #   Then I wait for element with selector "div[id='videoModal'] div[class='modal-content']" to be present
  #   When I click on element with selector "button[title='Play Video']"
  #   # ?????????? What will be an assertion that video starts playing?
  #   When I click on element with selector "div[id='videoModal'] div[class='modal-footer'] button[type='button']"
  #   Then I wait for element with selector "div[id='videoModal'] div[class='modal-content']" to NOT be present`

