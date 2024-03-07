/// <reference types="cypress" />

class Parabank_PO {
  constructor() {
    this.BaseUrl = "https://parabank.parasoft.com/";
    this.name = "input[id='customer.firstName']";
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
  }


  register() {
    cy.fixture("parabankJane.json").then((data) => {
      // cy.visit(this.BaseUrl)
      cy.get(this.name).type(data.user.name);
      cy.get(this.lastName).type(data.user.lastName);
      cy.get(this.addrStr).type(data.user.street);
      cy.get(this.addrCity).type(data.user.city);
      cy.get(this.addrState).type(data.user.state);
      cy.get(this.addrZip).type(data.user.zip);
      cy.get(this.phoneNum).type(data.user.phone);
      cy.get(this.ssn).type(data.user.ssn);
      cy.get(this.userName).type(data.user.userName);
      cy.get(this.password).type(data.user.password);
      cy.get(this.confirmPsw).type(data.user.password);
      cy.get(this.submitReg).click();
      cy.get(this.successMsg).should("contain", data.SucsessInfo);
    });
  }

  // login() {
  //   cy.fixture("parabankJane.json").then((data) => {
  //     cy.visit(this.BaseUrl);
  //     cy.get(this.userLog).type(data.userser.userName);
  //     cy.get(this.pwdLog).type(data.user.password);
  //     cy.get(this.submitLog).click();
  //   });
  // }

  openNewAccount(){
    cy.fixture("parabankJane.json").then((data) => {
      cy.visit(data.BaseUrl);
      cy.get(data.openNewAccount).click();
      cy.get(data.OpenAccountSubmit).click();
      cy.get(data.openAccountConfirmation).contains(data.registerUser.openAccountConfirmation);
        })
}
}
export default Parabank_PO;
