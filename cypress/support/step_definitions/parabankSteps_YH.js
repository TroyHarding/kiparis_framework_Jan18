/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import parabankHome_YH from "../page-object/parabankHome_YH";

Given("I log in to parabank with valid Account", () => {
  let lg = new parabankHome_YH();
  lg.logIn();
  lg.verifyAccountServices();
  lg.verifyLeftMenu();
});

When("I open new {string} Account", (account) => {
  let newAccount = new parabankHome_YH();
  newAccount.openAccount(account);
});

Then("verify new account created", () => {
  let vr = new parabankHome_YH();
  vr.verifyAccountOpened();
});
