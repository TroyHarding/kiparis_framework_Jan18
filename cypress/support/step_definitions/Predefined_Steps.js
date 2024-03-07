/// <reference types="cypress" />
import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";
  
  Given(`I open url {string}`, (url) => {
    cy.visit(url);
  });
  
  Given(`I ignore error`, () => {
    cy.on("uncaught:exception", (err, runnable, promise) => {
      // when the exception originated from an unhandled promise
      // rejection, the promise is provided as a third argument
      // you can turn off failing the test in this case
      if (promise) {
        return false;
      }
      // we still want to ensure there are no other unexpected
      // errors, so we let them fail the test
    });
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
  Then(`element with selector {string} should NOT be present`, (selector) => {});
  
  Then(`I wait for element with selector {string} to be present`, (selector) => {
    cy.get(selector).should("be.visible");
  });
  
  Then(
    `I wait for element with selector {string} to NOT be present`,
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
    cy.frameLoaded("#Your project: 'Test Project'");
  });
  
  Then(
    `I search within iframe {string} with a selector {string} to find text {string}`,
    (ifrmae, selector, text) => {
      cy.iframe(ifrmae).find(selector).should("eq", text);
    }
  );
  
  
  Then(
    `element with xpath {string} should NOT contain text {string}`,
    (selector, text) => {
      cy.get(selector).contains(text).should("not.exist");
    }
  );
  
  Then(
    `element with selector {string} should contain text {string} and should NOT contain text {string}`,
    (selector, text, text2) => {
      cy.get(selector).contains(text).should("exist");
      cy.get(selector).contains(text2).should("not.exist");
    }
  );
  
  
  Then(
    `element with xpath {string} should NOT contain text {string}`,
    (selector, text) => {
      cy.get(selector).contains(text).should("not.exist");
    }
  );
  
  
  Then(
    `the product details in element with selector {string} should contain text {string}`,
    (selector, text) => {
      cy.get(selector).contains(text).should("exist");
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
      cy.stub(win, "confirm").returns(true);
    });
  });
  
  //Dismiss Alert
  Then(`I dismiss alert`, () => {
    cy.on("window:alert", (text) => {
      return false;
    });
  });
  
  //Check for text alert
  Then(`I check the alert text is {string}`, (expectedText) => {
    cy.on("window:alert", (expectedText) => {
      expect(expectedText).to.equal(expectedText);
    });
  });
  
  Then(`I clear alert with xpath {string}`, (xpath) => {});
  //Hover
  Then(`I hover over elemt with xpath`, () => {});
  
  // Given(`I log in as a valid user to demoblaze`, () => {
  //   cy.visit("https://www.demoblaze.com");
  //   cy.get("#login2").click();
  // });
  
  When(`I filter product for {string} category`, (product) => {
    console.log("category:", product);
    switch (product) {
      case "Laptops":
        cy.get("a[onclick*='notebook']").click();
        cy.get("#tbodyid").contains("MacBook Pro").should("exist");
        cy.get("#tbodyid").contains("Sony vaio i7").should("exist");
        break;
      case "Phones":
        cy.get("a[onclick*='Phones']").click();
        cy.get("#tbodyid").contains("Samsung galaxy s6").should("exist");
        cy.get("#tbodyid").contains("Nexus 6").should("exist");
        break;
      case "Monitors":
        cy.get("a[onclick*='Monitors']").click();
        cy.get("#tbodyid").contains("Apple monitor 24").should("exist");
        cy.get("#tbodyid").contains("ASUS Full HD").should("exist");
        break;
      default:
        console.log("This Aint it");
        break;
    }
  });
  Given(`I log in as a valid user to demoblaze`, () => {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      //Click Login
      cy.get(data.loginbutton).click();
      //Type username
      cy.get("#loginusername").type(data.username);
      //Type password
      cy.get("#loginpassword").type(data.password).wait(1000);
      //Click login
      cy.get(data.loginbutton2).click();
    });
  });
  Then("I verify header and footer is correct", () => {
    // cy.get("a[id='login2']").click();
    // cy.get("input[id='loginusername']").type("User599").wait(1000);
    // cy.get("input[id='loginpassword']").type("PassTestNew");
    // cy.get("button[onclick='logIn()']").click();
    cy.get("a[href='index.html']").should("exist");
    cy.get("a[data-target='#exampleModal']").should("exist");
    cy.get("a[data-target='#videoModal']").should("exist");
    cy.get("a[id='cartur']").should("exist");
    cy.get("a[id='logout2']").should("exist");
    cy.get("a[id='nameofuser']").should("exist");
    cy.get("h4[class='grrrr']").contains("About Us").should("exist");
    cy.get("h4[class='grrrr']").contains("Get in Touch").should("exist");
  });
  
  Given("I click and navigate to the {string} product page", (product) => {
    switch (product) {
      case "MacBook air":
        cy.get("a[onclick*='notebook']").click();
        cy.wait(5000);
        cy.get("a[href='prod.html?idp_=11']").contains('MacBook air').click();
        cy.get("#tbodyid").contains("MacBook air").should("exist");
        break;
      case "MacBook Pro":
        cy.get("a[onclick*='notebook']").click();
        cy.get("a[class='hrefch']").contains('MacBook Pro').click();
        cy.get("#tbodyid").contains("MacBook Pro").should("exist");
        break;
      default:
        console.log("This Aint it");
        break;
    }
  });
  
  
  
  When(`I add the current item to cart from the product page`, () => {
    cy.contains("a.btn.btn-success.btn-lg", "Add to cart").click();
    cy.get("a[id='cartur']").click();
    cy.get("#tbodyid").contains("MacBook Pro").should("exist");
  });
  
  When(
    `I click Place Order and fill out the Form with default information`,
    () => {
      cy.get("button[data-target='#orderModal']").click();
      cy.get("input[id='name']").type("John Smith");
      cy.get("input[id='country']").type("USA");
      cy.get("input[id='city']").type("West Hills, CA");
      cy.get("input[id='card']").type("2233 4455 6677 8899");
      cy.get("input[id='month']").type("12");
      cy.get("input[id='year']").type("2028");
      cy.get("button[onclick='purchaseOrder()']").click();
      cy.get("h2:contains('Thank you for your purchase!')").should("exist");
    }
  );
  
  // Given(`I log in as a valid user to demoblaze`, () => {
  //   cy.visit("https://www.demoblaze.com");
  //   cy.get("#login2").click();
  // });
  
  When(`I filter product for {string} category`, (product) => {
    console.log("category:", product);
    switch (product) {
      case "Laptops":
        cy.get("a[onclick*='notebook']").click();
        cy.get("#tbodyid").contains("MacBook Pro").should("exist");
        cy.get("#tbodyid").contains("Sony vaio i7").should("exist");
        break;
      case "Phones":
        cy.get("a[onclick*='Phones']").click();
        cy.get("#tbodyid").contains("Samsung galaxy s6").should("exist");
        cy.get("#tbodyid").contains("Nexus 6").should("exist");
        break;
      case "Monitors":
        cy.get("a[onclick*='Monitors']").click();
        cy.get("#tbodyid").contains("Apple monitor 24").should("exist");
        cy.get("#tbodyid").contains("ASUS Full HD").should("exist");
        break;
      default:
        console.log("This Aint it");
        break;
    }
  });
  Given(`I log in as a valid user to demoblaze`, () => {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      //Click Login
      cy.get(data.loginbutton).click();
      //Type username
      cy.get("#loginusername").type(data.username);
      //Type password
      cy.get("#loginpassword").type(data.password).wait(1000);
      //Click login
      cy.get(data.loginbutton2).click();
    });
  });
  Then("I verify header and footer is correct", () => {
    // cy.get("a[id='login2']").click();
    // cy.get("input[id='loginusername']").type("User599").wait(1000);
    // cy.get("input[id='loginpassword']").type("PassTestNew");
    // cy.get("button[onclick='logIn()']").click();
    cy.get("a[href='index.html']").should("exist");
    cy.get("a[data-target='#exampleModal']").should("exist");
    cy.get("a[data-target='#videoModal']").should("exist");
    cy.get("a[id='cartur']").should("exist");
    cy.get("a[id='logout2']").should("exist");
    cy.get("a[id='nameofuser']").should("exist");
    cy.get("h4[class='grrrr']").contains("About Us").should("exist");
    cy.get("h4[class='grrrr']").contains("Get in Touch").should("exist");
  });
  
  Given("I click and navigate to the {string} product page", (product) => {
    switch (product) {
      case "MacBook air":
        cy.get("a[onclick*='notebook']").click();
        cy.wait(5000);
        cy.get("a[href='prod.html?idp_=11']").contains('MacBook air').click();
        cy.get("#tbodyid").contains("MacBook air").should("exist");
        break;
      case "MacBook Pro":
        cy.get("a[onclick*='notebook']").click();
        cy.get("a[class='hrefch']").contains('MacBook Pro').click();
        cy.get("#tbodyid").contains("MacBook Pro").should("exist");
        break;
      default:
        console.log("This Aint it");
        break;
    }
  });
  
  
  
  When(`I add the current item to cart from the product page`, () => {
    cy.contains("a.btn.btn-success.btn-lg", "Add to cart").click();
    cy.get("a[id='cartur']").click();
    cy.get("#tbodyid").contains("MacBook Pro").should("exist");
  });
  
  When(
    `I click Place Order and fill out the Form with default information`,
    () => {
      cy.get("button[data-target='#orderModal']").click();
      cy.get("input[id='name']").type("John Smith");
      cy.get("input[id='country']").type("USA");
      cy.get("input[id='city']").type("West Hills, CA");
      cy.get("input[id='card']").type("2233 4455 6677 8899");
      cy.get("input[id='month']").type("12");
      cy.get("input[id='year']").type("2028");
      cy.get("button[onclick='purchaseOrder()']").click();
      cy.get("h2:contains('Thank you for your purchase!')").should("exist");
    }
  );
  // // NEW STUFF

// Given(`I log in as a valid user to demoblaze`, () => {
//   cy.visit("https://www.demoblaze.com/");
//   cy.get("#login2").click();
//   cy.get("#loginusername").type("mcm");
//   cy.wait(2000);
//   cy.get("#loginpassword").type("123");
//   cy.wait(2000);
//   cy.get("button[onclick='logIn()']").click();
//   cy.wait(2000);
//   // cy.get("div[id='logInModal'] div[class='modal-content']").should("not.be.visible");
//   // cy.get("div[id='logInModal'] span[aria-hidden='true']").click();
// });

// Then(`I verify header and footer is correct`, () => {
//   cy.get("#nava").should("be.visible");
//   cy.get("#navbarExample").should("be.visible");
//   cy.get("#footc").should("be.visible");
//   cy.get("#footc").contains("About Us").should("exist");
//   cy.get("#footc").contains("Get in Touch").should("exist");
//   cy.get("#footc").contains("PRODUCT STORE").should("exist");
// });

// When(`I filter product for {string} category`, (product) => {
//   switch (product) {
//     case "Laptops":
//       cy.get("a[onclick*='notebook']").click();
//       cy.get("#tbodyid").contains("MacBook Pro").should("exist");
//       cy.get("#tbodyid").contains("Sony vaio i7").should("exist");
//       break;
//     case "Phones":
//       cy.get("a[onclick*='Phones']").click();
//       cy.get("#tbodyid").contains("Samsung galaxy s6").should("exist");
//       cy.get("#tbodyid").contains("Nexus 6").should("exist");
//       break;
//     case "Monitors":
//       cy.get("a[onclick*='Monitors']").click();
//       cy.get("#tbodyid").contains("Apple monitor 24").should("exist");
//       cy.get("#tbodyid").contains("ASUS Full HD").should("exist");
//       break;
//     default:
//       console.log("This Aint it");
//       break;
//   }
// });
// // When (`I filter product for "Laptops" category`,() => {
// //   cy.get("a[onclick*='notebook']").click();
// // });

// Then(`I should see the product {string}`, (text) => {
//   cy.get("#tbodyid").contains(text).should("exist");
// });
