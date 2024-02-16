@Demoblaze
Feature: Demo Blaze PO abd P1 Manual Cases

  @demob1: 
  Scenario:Sign In canceled 
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 1 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
  Then element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary" should NOT be present
 
  @demob2: 
  Scenario:Valid Sign In 1.1 Header and footer verification.
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 2 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  When I type "Taleo123!" into element with selector "#loginpassword"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  Then element with selector "#nava" should be present
  Then element with selector ":nth-child(1) > .thumbnail > .caption > .grrrr > b" should be present
  
  @demob3: 
  Scenario:Valid Sign In 1.2 Filter for Laptops category
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 2 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  When I type "Taleo123!" into element with selector "#loginpassword"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  Then I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)"
  Then element with selector ":nth-child(3) > .card > .card-block > .card-title > .hrefch" should be present
 
 @demob4: 
  Scenario:Valid Sign In 1.3 Product Page verification 
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 2 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  When I type "Taleo123!" into element with selector "#loginpassword"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  Then I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)"
  Then I click on element with selector ":nth-child(3) > .card > .card-block > .card-title > .hrefch"
  Then element with selector ".name" should be present
  
  @demob5: 
  Scenario:Valid Sign In 1.4 Verify that Item is added from product page 
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 2 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  When I type "Taleo123!" into element with selector "#loginpassword"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  Then I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)"
  Then I click on element with selector ":nth-child(3) > .card > .card-block > .card-title > .hrefch"
  Then I click on element with selector ".col-sm-12 > .btn"
  Then I click on element with selector ":nth-child(4) > .nav-link"
  Then element with selector "#tbodyid > :nth-child(1) > :nth-child(1) > img" should be present

@demob6: 
  Scenario:Valid Sign In 1.5 Verify that Item is presented in the cart
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 2 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  When I type "Taleo123!" into element with selector "#loginpassword"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  Then I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)"
  Then I click on element with selector ":nth-child(3) > .card > .card-block > .card-title > .hrefch"
  Then I click on element with selector ".col-sm-12 > .btn"
  Then I click on element with selector ":nth-child(4) > .nav-link"
  Then element with selector "#tbodyid > :nth-child(1) > :nth-child(1) > img" should be present

@demob7: 
  Scenario:Valid Sign In 1.6 Verify sucsessful purchase
  Given I open url "https://www.demoblaze.com/"
  Then I click on element with selector "#login2"
  Then I wait for 2 sec
  When I type "LinaKondrat" into element with selector "#loginusername"
  When I type "Taleo123!" into element with selector "#loginpassword"
  Then I click on element with selector "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  Then I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)"
  Then I click on element with selector ":nth-child(3) > .card > .card-block > .card-title > .hrefch"
  Then I click on element with selector ".col-sm-12 > .btn"
  Then I click on element with selector ":nth-child(4) > .nav-link"
  Then element with selector "#tbodyid > :nth-child(1) > :nth-child(1) > img" should be present
  Then I click on element with selector ".col-lg-1 > .btn" 
  When I type "Name" into element with selector "#name"
  Then element with selector "#name" should be present
  When I type "City" into element with selector "#city"
  Then element with selector "#city" should be present
  When I type "555555555555" into element with selector "#card"
  Then element with selector "#card" should be present
  When I type "february" into element with selector "#month"
  Then element with selector "#month" should be present
  When I type "2024" into element with selector "#year"
  Then element with selector "#year" should be present
  Then I click on element with selector "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary" 
  Then element with selector ".sweet-alert" should be present

  