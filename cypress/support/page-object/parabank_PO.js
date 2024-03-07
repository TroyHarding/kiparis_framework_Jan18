/// <reference types="cypress" />

class parabank_PO {
  constructor() {
    this.firstName = "input[id='customer.firstName']";
    this.lastName = "input[id='customer.lastName']";
    this.addrStr = "input[id='customer.address.street']";
    this.addrCity = "input[id='customer.address.city']";
    this.addrState = "input[id='customer.address.state']";
    this.addrZip = "input[id='customer.address.zipCode']";
    this.phoneNum = "input[id='customer.phoneNumber']";
    this.ssn = "input[id='customer.ssn']";
    this.userName = "input[id='customer.username']";
    this.password = "input[id='customer.password']";
    this.confirmPsw = "input[id='repeatedPassword']";
    this.submitReg = "td > input[type='submit']";
    this.successMsg = "div > p";
    this.userLog = "input[type='text']";
    this.pwdLog = "input[type='password']";
    this.submitLog = "div > input[type='submit']";
    this.openAcc = "a[href='/parabank/openaccount.htm']";
    this.accDd = "select#type";
    this.accOpt = "select#type option";
    this.btnOpenAcc = "input[value='Open New Account']";
    this.newAccID = "a[id='newAccountId']";
    this.accType = "td[id='accountType']";
    this.transfer = "a[href='/parabank/transfer.htm']";
    this.amount = "input[id='amount']";
    this.fromAcc = "select#fromAccountId";
    this.toAcc = "select#toAccountId";
    this.submitTransfer = "input[value='Transfer']";
    this.resultTransfer = "div[ng-if='showResult']";

    this.openAcc = "a[href='/parabank/openaccount.htm']";
    this.loginUsername = "input[name='username']";
    this.loginPassword = "input[name='password']";
    this.loginButton = "input[value='Log In']";
    this.openAccountLink = "a[href='/parabank/openaccount.htm']";
    this.openAccountButton = "input[value='Open New Account']";
  }

  register() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.firstName).type(data.user.firstName);
      cy.get(this.lastName).type(data.user.lastName);
      cy.get(this.addrStr).type(data.user.street);
      cy.get(this.addrCity).type(data.user.city);
      cy.get(this.addrState).type(data.user.state);
      cy.get(this.addrZip).type(data.user.zip);
      cy.get(this.phoneNum).type(data.user.phone);
      cy.get(this.ssn).type(data.user.ssn);
      cy.get(this.userName).type(data.user.user);
      cy.get(this.password).type(data.user.pwd);
      cy.get(this.confirmPsw).type(data.user.pwd);
      cy.get(this.submitReg).click();
      cy.get(this.successMsg).should("contain", data.success);
    });
  }

  login() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.userLog).type(data.user.user);
      cy.get(this.pwdLog).type(data.user.pwd);
      cy.get(this.submitLog).click();
    });
  }
  open_new_account() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.openAcc).click();
      cy.get(this.accDd).invoke("val", "1").trigger("change");
      cy.get(this.btnOpenAcc).click();
      cy.get("p").should(
        "contain",
        "Congratulations, your account is now open."
      );
      cy.get(this.newAccID).click();
      cy.get(this.accType).should("contain", "SAVINGS");
    });
  }

  transfer_funds_min() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.transfer).click();
      cy.get(this.amount).type(data.sumMin);
      cy.get(this.fromAcc)
        .find("option")
        .eq(1)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.fromAcc).select(optionText);
        });
      cy.get(this.toAcc)
        .find("option")
        .eq(0)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.toAcc).select(optionText);
        });
      cy.get(this.submitTransfer).click();
      cy.get(this.resultTransfer).should("contain", "Transfer Complete!");
    });
  }

  transfer_funds_max() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.transfer).click();
      cy.get(this.amount).type(data.sumMax);
      cy.get(this.fromAcc)
        .find("option")
        .eq(1)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.fromAcc).select(optionText);
        });
      cy.get(this.toAcc)
        .find("option")
        .eq(0)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.toAcc).select(optionText);
        });
      cy.get(this.submitTransfer).click();
      cy.get(this.resultTransfer).should("contain", "Transfer Complete!");
    });
  }

  register() {
    cy.fixture("parabank_elena.json").then((data) => {
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
      cy.get(data.confirm).type(data.registerUser.password);
      cy.get(data.registerForm).click();
    });
  }

  login() {
    cy.fixture("parabank_elena.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.loginUsername).type(data.registerUser.userName);
      cy.get(this.loginPassword).type(data.registerUser.password);
      cy.get(this.loginButton).click();
    });
  }
}

export default parabank_PO;
