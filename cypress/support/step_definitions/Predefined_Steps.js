/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
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

// Then(
//   `element with selector {string} should contain text {string}`,
//   (selector, text) => {
//     cy.get(selector).contains(text).should("exist");
//   }
// );

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

// Then(
//   `the product details in element with selector {string} should contain text {string}`,
//   (selector, text) => {
//     cy.get(selector).contains(text).should("exist");
//   }
// );

// Then(
//   `element with selector {string} should contain text {string}`,
//   (selector, text) => {
//     cy.get(selector).contains(text).should("exist");
//   }
// );

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
// Given(`I click and navigate to the "Macbook Pro" product page`, () => {
//   cy.get(
//     "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
//   ).click();
//   cy.wait(1000);
//   cy.get(".name").contains("MacBook Pro").should("exist");
// });

// When(`I add the current item to cart from the product page`, () => {
//   cy.get(".btn.btn-success.btn-lg").click();
// });
// When(`I navigate to the {string} page`, (text) => {
//   cy.get("#cartur").click();
// });

// Then(`I verify the item {string} is present in the cart`, (text) => {
//   cy.get("td:nth-child(2)").contains(text).should("exist");
// });
// When(
//   `I click Place Order and fill out the Form with default information`,
//   () => {
//     cy.get(".btn.btn-success").click();
//     cy.get("#name").type("mcm");
//     cy.get("#country").type("mcm");
//     cy.get("#city").type("mcm");
//     cy.get("#card").type("mcm");
//     cy.get("#month").type("mcm");
//     cy.get("#year").type("mcm");
//     cy.get("button[onclick='purchaseOrder()']").click();
//   }
// );

// Then(`I should see modal indicating a successful purchase`, () => {
//   cy.get(".sweet-alert.showSweetAlert.visible").should("exist");
// });
