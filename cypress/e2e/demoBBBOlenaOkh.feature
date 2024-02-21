@demo
Feature: Home Main page

   @home
   Scenario: Home Page Elements
     Given I open url "https://www.demoblaze.com/"
     When I click on element with selector "li[class='nav-item active'] a[class='nav-link']"
     Then I should see page title as "STORE"
     When I wait for 5 sec
     Then element with selector ".carousel-inner" should be present
     And element with selector "#tbodyid" should be present
     When element with selector "#footc" should be present 
     Then element with selector "div[class='col-sm-4 col-lg-4 col-md-4'] b" should contain text "About Us"
     And element with selector "div[class='col-sm-3 col-lg-3 col-md-3'] b" should contain text "Get in Touch"

   @categories
   Scenario: Categories
     Given I open url "https://www.demoblaze.com/"
     When I click on element with selector "li[class='nav-item active'] a[class='nav-link']"
     
     When I click on element with selector "a[onclick*=phone]" 
     Then element with selector "p#article.card-text" should contain text "phone"
     
     When I click on element with selector "a[onclick*=notebook]"
     Then element with selector "p#article.card-text" should contain text "notebook"
    
     When I click on element with selector "a[onclick*=monitor]" 
     Then element with selector "p#article.card-text" should contain text "display"

     When I click on element with selector "#cat" 
     Then element with selector "p#article.card-text" should contain text "display"
     And element with selector "p#article.card-text" should contain text "phone"
     And element with selector "p#article.card-text" should contain text "notebook"
     Then I click on element with selector "#next2"
     Then element with selector "p#article.card-text" should contain text "display"
     
     @Contact
   Scenario: Contact
     Given I open url "https://www.demoblaze.com/"
     When I click on element with selector "a[data-target='#exampleModal']"
     Then element with selector "a[data-target='#exampleModal']" should be present
     Then I type "abcd@google.com" into element with selector "input#recipient-email.form-control"
     Then I type "AWAW" into element with selector "input#recipient-name.form-control"
     Then I type "Hello World!!!" into element with selector "textarea#message-text.form-control"
     When I click on element with selector "button[onclick='send()']"
     Then I accept alert
     When I wait for 5 sec

     @About
   Scenario: About Us
     Given I open url "https://www.demoblaze.com/"
     When I click on element with selector "a[data-target='#videoModal']"
     Then element with selector "#videoModalLabel" should be present
     When I click on element with selector ".vjs-big-play-button"
     Then I wait for element with selector "div[class*=playing]" to be present
     When I click on element with selector "div[id='videoModal'] div[class='modal-footer'] button[type='button']"
     Then I wait for element with selector "div[id='videoModal'] div[class='modal-header']" to NOT be present
   