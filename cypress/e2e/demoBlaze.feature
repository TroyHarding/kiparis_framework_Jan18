function greet(param) {
    console.log("Hello Person")
    console.log(param)
} 

const human = {
    name: "Craig",
    address: "123 Paper Street",
    isHappy: false
} 


let person = {
    name: "Andrew",
    address: "123 Paper Street",
    isHappy: undefined
}

let serverResponse = {
    ipAddress: undefined,
    cookie: undefined,
    auth: undefined
}

const people = [
  {name: "Yuliia",
  address: "321 Paper Street",
  isHappy: true},
  {name: "Nadiia",
  address: "43434 Rock Street",
  isHappy: true},
  {name: "Elena",
  address: "8974 Scissor Street",
  isHappy: true}  
];

const people = [
  {name: "Yuliia",
  address: "321 Paper Street",
  isHappy: true},
  {name: "Nadiia",
  address: "43434 Rock Street",
  isHappy: true},
  {name: "Elena",
  address: "8974 Scissor Street",
  isHappy: true},
  {name: "Yuriy",
  address: "7477 Lazor Street",
  isHappy: true}
];

for (let i =0; i < people.length; i++) {
    console.log(people[i].name);

}



 @demob
    Feature: E2E 
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
    
    
    
    

