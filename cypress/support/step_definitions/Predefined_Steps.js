/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

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

//####################  NEW STUFF for demoBElenaD.feature ###################################

// Given(`I log in as a valid user to demoblaze`, () => {

//   cy.fixture("demoblaze.json").then((data) => {
//     cy.visit(data.baseUrl);
//     cy.get("#login2").click(); //click login
//     // cy.wait(1000);
//     cy.get("#loginusername").type(data.username); //typein user name
//     // cy.wait(1000);
//     cy.get("#loginpassword").type(data.password); //typenin password
//     // cy.wait(1000);
//     cy.get("button[onclick='logIn()']").click();
//     // cy.wait(1000);
//   });
// });

// Then(`I verify header and footer is correct`, () => {
//   // header
//   cy.get("#nava").should("be.visible"); //logo
//   cy.get("li[class='nav-item active'] a[class='nav-link']").should(
//     "be.visible"
//   ); //Home link
//   cy.get("a[data-target='#exampleModal']").should("be.visible"); //COntact link
//   cy.get("a[data-target='#videoModal']").should("be.visible"); //About us link
//   cy.get("#cartur").should("be.visible"); //Cart link
//   cy.get("#logout2").should("be.visible"); //Log out link
//   cy.get("#nameofuser").should("be.visible"); //Welcome link

//   //footer
//   // cy.get("div[class='col-sm-4 col-lg-4 col-md-4'] b").should("be.visible"); //About us link   div[class='col-sm-4 col-lg-4 col-md-4'] b
//   cy.get("div[class='col-sm-4 col-lg-4 col-md-4'] b")
//     .contains("About Us")
//     .should("exist");
//   // cy.get("div[class='col-sm-3 col-lg-3 col-md-3'] b").should("be.visible"); //Get in Touch link  div[class='col-sm-3 col-lg-3 col-md-3'] b
//   cy.get("div[class='col-sm-3 col-lg-3 col-md-3'] b")
//     .contains("Get in Touch")
//     .should("exist");
// });

// When(`I filter product for {string} category`, (category) => {
//   switch (category) {
//     case "Phones":
//       cy.get("#itemc").contains("Phones").click();
//       break;
//     case "Laptops":
//       cy.get("#itemc").contains("Laptops").click();
//       break;
//     case "Monitors":
//       cy.get("#itemc").contains("Monitor").click();
//       break;

//     // default:
//     //   throw new Error(
//     //     "Wrong Device name was inputed:" + device + "is not valid"
//     //   );
//     //   break;
//   }
// });

// Then(`I should see the product {string}`, () => {
//   cy.get("#tbodyid").contains("MacBook Pro").should("exist");
// });

// Given(`I click and navigate to the "Macbook Pro" product page`, () => {
//   cy.get(
//     "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
//   ).click();
//   cy.get(".name").contains("MacBook Pro").should("exist");
// });

// When(`I add the current item to cart from the product page`, () => {
//   cy.get(".btn.btn-success.btn-lg").click();
//   cy.window().then((win) => {
//     cy.stub(win, "confirm").returns(true);
//   });
// });

// When(`I navigate to the Cart page`, () => {
//   cy.get("#cartur").click();
// });

// Then(`I verify the item {string} is present in the cart`, () => {
//   cy.get("td:nth-child(2)").contains("MacBook Pro").should("exist");
// });

// When(
//   `I click Place Order and fill out the Form with default information`,
//   () => {
//     cy.get(".btn.btn-success").click();
//     cy.get("div[id='orderModal'] div[class='modal-content']").should(
//       "be.visible"
//     );

//     cy.get("#name").type("test");
//     cy.get("#country").type("test");
//     cy.get("#city").type("test");
//     cy.get("#card").type("test");

//     cy.get("#month").type("test");
//     cy.get("#year").type("test");
//     cy.get("button[onclick='purchaseOrder()']").click();
//   }
// );

// When(`I should see modal indicating a successful purchase`, () => {
//   cy.get("sbody div:nth-child(11)").should("be.visible");
// });
