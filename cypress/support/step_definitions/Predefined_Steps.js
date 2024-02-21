/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
// import { truncate } from "cypress/types/lodash";

Given(`I open url {string}`, (url) => {
    cy.visit(url);
});

Given(`I ignore error`, () => {
  cy.on('uncaught:exception', (err, runnable, promise) => {
    // when the exception originated from an unhandled promise
    // rejection, the promise is provided as a third argument
    // you can turn off failing the test in this case
    if (promise) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })
});

Given(`I resize window to {int} and {int}"`, (width, height) => {
  cy.viewport(width, height);
});

Given(`I resize window to emulate {word}`, (device) => {
  switch (device) {
    case value:
      "iphone-xr";
      cy.viewport("iphone-xr");
      break;

    default:
      throw new Error(
        "Wrong Device name was inputed:" + device + "is not valid"
      );
      break;
  }
});

Then(`I wait for {int} sec`, (sec) => {
  cy.wait(sec * 1000);
});

Then(`element with selector {string} should be present`, (selector) => {
  cy.get(selector).should("be.visible");
});

Then(`element with xpath {string} should NOT be present`, (selector) => {});

Then(`I wait for element with selector {string} to be present`, (selector) => {
  cy.get(selector).should("be.visible");
});

Then(`I wait for element with selector {string} to NOT be present`,
  (selector) => {
    cy.get(selector).should("not.be.visible");
  }
);

//Type
When(
  `I type {string} into element with selector {string}`,
  (text, selector) => {
    cy.get(selector).type(text);
  }
);

//Click
When(`I click on element with selector {string}`, (selector) => {
  cy.get(selector).click();
});

//title
Then(`I should see page title as {string}`, (title) => {
  cy.title().should("eq", title);
});

Then(`I should see page title contains {string}`, (title) => {
  cy.title().should("include", title);
});

//Screenshot Window
Then(`I take a screenshot`, () => {
  cy.screenshot();
});

Then(
  `element with selector {string} should contain text {string}`,
  (selector, text) => {
    cy.get(selector).contains(text).should("exist");
  }
);

Then(
  `element with selector {string} should NOT contain text {string}`,
  (selector, text) => {
    cy.get(selector).contains(text).should("not.exist");
  }
);

Given(`I verify iframe with selector {string} has loaded`, (selector) => {
  cy.frameLoaded("#Your project: 'Test Project'");
});

Then(
  `I search within iframe {string} with a selector {string} to find text {string}`,
  (ifrmae, selector, text) => {
    cy.iframe(ifrmae).find(selector).should("eq", text);
  }
);

Then(`I swith to default content`, () => {});

//Window
Then(`I swith to a new window`, () => {});
Then(`I swith to first window`, () => {});
//Tab
Then(`I swith to a new tab`, () => {});
Then(`I swith to first tab`, () => {});

//Accpets Any alerts
Then(`I accept alert`, () => {
  cy.window().then((win) => {
    cy.stub(win, 'confirm').returns(true);
  });
});

//Dismiss Alert
Then(`I dismiss alert`, () => {
  cy.on('window:alert', (text) => {  
    return false;
  });
});

//Check for text alert
Then(`I check the alert text is {string}`, (expectedText) => {
  cy.on('window:alert', (expectedText) => {
    expect(expectedText).to.equal(expectedText);
  });
});


Then(`I clear alert with xpath {string}`, (xpath) => {});
//Hover
Then(`I hover over elemt with xpath`, () => {});

//NEW STUFF
Given(`I log in as a valid user to demoblaze`, () => {
  cy.visit("https://www.demoblaze.com/"); 
  // cy.get("#signin2").click();
  // cy.get("#sign-username").type("WEWE");
  // cy.get("#sign-password").type("1!11!!!!1");
  // cy.get("button[onclick='register()']").click(); 

  cy.get("#login2").click();
  cy.get("#loginusername").type("WEWE");
  cy.get("#loginpassword").type("1!11!!!!1");
  cy.get("button[onclick='logIn()']").click(); 
});

Given(`I verify header and footer is correct`, () => {
  // #Check header (Logo, Buttons) 
  cy.get("a[id='nava'] img").should("be.visible");
  verifySelectorWithText("#nava", "PRODUCT STORE");
  verifySelectorWithText("li[class='nav-item active'] a[class='nav-link']", "Home");
  verifySelectorWithText("a[data-target='#exampleModal']", "Contact");
  verifySelectorWithText("a[data-target='#videoModal']", "About us");
  verifySelectorWithText("#cartur", "Cart");
  verifySelectorWithText("#login2", "Log in");
  verifySelectorWithText("#signin2", "Sign up");
 
  //  Check Footer, 
  verifySelectorWithText("div[class='col-sm-4 col-lg-4 col-md-4'] b", "About Us");
  verifySelectorWithText("div[class='col-sm-3 col-lg-3 col-md-3'] b", "Get in Touch");
  cy.get("div[class='caption'] h4 img").should("be.visible");
  //  check footer element, 
  //  and check text 
  verifySelectorWithText("div[class='col-sm-4 col-lg-4 col-md-4'] p", "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.");
  // cy.get("div[class='col-sm-3 col-lg-3 col-md-3']").contains("Address: 2390 El Camino Real").should("exist");
  // cy.get("div[class='col-sm-3 col-lg-3 col-md-3']").contains("Phone").should("exist");
  // cy.get("div[class='col-sm-3 col-lg-3 col-md-3']").contains("Email").should("exist");

});

When(`I filter product for {string} category`, (nameCategory) => {
  let selectorCat, detailproduct = "p#article.card-text",
   schouldText, noSchouldText;
  if(nameCategory == "Phones"){
    selectorCat = "a[onclick*=phone]";
    schouldText = "phone";
    noSchouldText = "notebook";
  } else if(nameCategory == "Laptops"){
    selectorCat = "a[onclick*=notebook]";
    schouldText = "notebook";
    noSchouldText = "phone";
  } else if(nameCategory == "Monitors"){
    selectorCat = "a[onclick*=monitor]";
    schouldText = "display";
    noSchouldText = "notebook";
  }
  
  if(cy.get(selectorCat).should("be.visible")){
    cy.get(selectorCat).click();
    verifySelectorWithText(detailproduct, noSchouldText, false);
  }
});

When(`I should see the product {string}`, (nameProduct) => {
  verifySelectorWithText("div[id*='tbodyid']", nameProduct);
});

Given(`I click and navigate to the {string} product page`, (nameProduct) => {
  let selectorProd;
  if(nameProduct == "MacBook Pro"){
    selectorProd ="#tbodyid > div:nth-child(6) > div > div > h4 > a";
  } 
  
  if(cy.get(selectorProd).should("be.visible")){
    cy.get(selectorProd).click();
    verifySelectorWithText(".name", nameProduct, true);
  }
  
});

Given(`I add the current item to cart from the product page`, () => {
  cy.get("a[onclick*=addToCart]").click();
});

Given(`I navigate to the {string} page`, (nameOfMenu) => {
  if(nameOfMenu =='Cart'){
    cy.get("#cartur").click();
  }
   
});

Given(`I verify the item {string} is present in the cart`, (nameProduct) => {
  verifySelectorWithText("#tbodyid", nameProduct, true);
});

Given(`I click Place Order and fill out the Form with default information`, () => {
  cy.get(".btn.btn-success").click();

  cy.get("input#name.form-control").type("MyName");
  cy.get("input#country.form-control").type("My Country");
  cy.get("input#city.form-control").type("MyCity");
  cy.get("input#card.form-control").type("101010");
  cy.get("input#month.form-control").type("Ferbuary");
  cy.get("input#year.form-control").type("2000");
  cy.get("button[onclick*=purchaseOrder]").click();
});

Given(`I verify the modal window is present`, () => {
  cy.get("div[class*=visible]").should("be.visible");
});

Given(`I should see modal indicating a successful purchase`, () => {
  verifySelectorWithText("p.lead.text-muted", "Id");
  verifySelectorWithText("p.lead.text-muted", "Amount");
  verifySelectorWithText("p.lead.text-muted", "101010");
  verifySelectorWithText("p.lead.text-muted", "MyName"); 
  verifySelectorWithText("p.lead.text-muted", "Date");
  cy.get("div.sa-confirm-button-container").click();
});


function verifySelectorWithText(parSelector, parText, flagContains = true) {
  if(flagContains){
    cy.get(parSelector).contains(parText).should("exist");
  } else if(flagContains == false){
    cy.get(parSelector).contains(parText).should("not.exist");
  }
  
}