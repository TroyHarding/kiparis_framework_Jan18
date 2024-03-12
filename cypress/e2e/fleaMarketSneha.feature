@Flea
Feature: Flea market

  @Flea1
  Scenario: End to end steps for Fleamarket
  Given I log in as a valid user to Fleamarket
  Then I should see page title as "WARNING! This is a training site, all products are presented for educational purposes only."
#    Add to cart
 When I click on selector 
 #View cart
 Then I should see element with selector 
 When I click on element with selector
 #Cart
 Then element selector should contain selector
 
 #Proceed to checkout
 When I click on element with selector
 #Checkout
 Then I should see element with selector 
 When I type "John" into element with selector
 And I type "Doe" into element with selector
 And I type "E El Camino Real" into element with selector
 And I type "94087" into element with selector
 And I type "Sunnyvale" into element with selector
 And I type "johndoe@somedomain.com" into element with selector
 #Place Order
 And I click on element with selector
 #Thank you. Your order has been received.
 Then I should see element with text "Thank you. Your order has been received."

