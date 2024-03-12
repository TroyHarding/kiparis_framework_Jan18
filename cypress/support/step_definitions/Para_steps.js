/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import parabank_PO from "../page-object/parabank_PO";


Given(`I navigate to the default parabank page`, () => {
  cy.fixture("parabank_olena.json").then((data) => {



Given("I open new url {string}", () => {
  cy.fixture("parabank_Leo.json").then((data) => {

    cy.visit(data.baseUrl);
  });
});


When(`I click the Register button`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.registerHome).click();
  });
});

When(`I fill out all of the required registration fields`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.firstName).type(data.registerUser.firstName);
    cy.get(data.lastName).type(data.registerUser.lastName);
    cy.get(data.address).type(data.registerUser.address);
    cy.get(data.city).type(data.registerUser.city);
    cy.get(data.state).type(data.registerUser.state);
    cy.get(data.zipCode).type(data.registerUser.zipCode);
    cy.get(data.phone).type(data.registerUser.phone);
    cy.get(data.ssn).type(data.registerUser.ssn);
    cy.get(data.userName).type(data.registerUser.userName);
    cy.get(data.password).type(data.registerUser.password);
    cy.get(data.confirmPassword).type(data.registerUser.password);
  });
});

When(`I click the Register button to complete sign up`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.registerForm).click();
  });
});

When(`I login with validation credential`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.visit(data.baseUrl);
    cy.get(data.logInUserName).type(data.activetedUser.name);
    cy.get(data.logInUserPassword).type(data.activetedUser.password);
    cy.get(data.logIn).click();
  });
});

Then(`I click Open New Account button`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.buttonOpenAccount).click();
  });
});

Then(`I select an account type`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.fieldtypeAccount).type(data.valueNewAccount.typeAccount);
  });
});

Then(`I select default mimimum deposit`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.fieldDeposit).type(data.valueNewAccount.deposit);
  });
});

Then(`I click the Open New Account button`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.btnNewAccount).click();
  });
});

Then(`I verify my account has been created`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.fldMSG).contains(data.msgCreatedAccount).should("exist");
  });
});

Then(`I verify account exists on Accounts Overview tab`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.btnAccountOverview).click();
    cy.get(data.tabAccountOverview)
      .contains(data.numberAccount)
      .should("exist");
  });
});

Then(`I click {string} button`, (btnName) => {
  cy.fixture("parabank_olena.json").then((data) => {
    switch (btnName) {
      case "Transfer Funds":
        cy.get(data.transferFunds).click();
        break;

      case "Transfer":
        cy.get(data.btnTransfer).click();
        break;
      
      default:
        console.log("I can't find the button");
        break;
    }

  });
});

Then(`I fill out {string}`, (fldStr) => {
  cy.fixture("parabank_olena.json").then((data) => {
    switch (fldStr) {
      case "Amount":
        cy.get(data.amount).type(data.valueTransfer.amount);
        break;

      case "FromAccount":
        cy.get(data.fromAccount).select(data.valueTransfer.fromAccount);
        break;

      case "ToAccount":
        cy.get(data.toAccount).select(data.valueTransfer.toAccount);
        break;

      default:
        console.log("I can't find the field");
        break;
    }
  
  });
});

Then(`I verify funds have been transferred`, () => {
  cy.fixture("parabank_olena.json").then((data) => {
    cy.get(data.tabTransfer)
      .contains(data.msgTransfer)
      .should("exist");
  });
});

Then("I click link {string}", (link) => {
  cy.fixture("parabank_Leo.json").then((data) => {
    switch (link) {
      case "<register>":
        cy.get(data.register).click();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I interacts with the page {string}", (link) => {
  cy.fixture("parabank_Leo.json").then((data) => {
    switch (link) {
      case "<register>":
        const rgst = new parabank_PO();
        rgst.register();
        break;

      case "<open_new_account>":
        const open = new parabank_PO();
        open.open_new_account();
        break;

      case "<transfer_funds>":
        const trf = new parabank_PO();
        trf.transfer_funds_min();
        trf.transfer_funds_max();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I login as a {string}", (link) => {
  cy.fixture("parabank_Leo.json").then((data) => {
    const lg = new parabank_PO();
    lg.login();
  });
});

Given("I open para url {string}", () => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

Then("I click para link {string}", (link) => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    switch (link) {
      case "<register>":
        cy.get(data.register).click();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I interacts with the  register page {string}", (link) => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    switch (link) {
      case "<register>":
        const rgst = new parabank_PO();
        rgst.register();
        break;

      case "<open_new_account>":
        const open = new parabank_PO();
        open.open_new_account();
        break;

      case "<transfer_funds>":
        const trf = new parabank_PO();
        trf.transfer_funds_min();
        trf.transfer_funds_max();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I login as {string}", (link) => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    const lg = new parabank_PO();
    lg.login();
  });
});


Given("I navigate to the default parabank page", () => {
  cy.fixture("parabank_sneha.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});
When("I click the Register button", () => {
  cy.fixture("parabank_sneha.json").then((data) => {
    cy.get(data.registerHome).click();
  });
});
When("I fill out all of the required registration details", () => {});
When("I click the Register button", () => {});
Then("I verify my account has been created", () => {});

