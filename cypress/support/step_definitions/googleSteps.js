import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";

Given(`I am on Google home page`, () => {
  cy.visit(url);
});


When(`I search for {string}`, term => {
  cy.get("input[aria-label='Search']").type(term).type('{enter}');
});

Then(`I see that the first result is {string}`, name => {
  cy.get('#search .rc h3').first().should(($el) => {
    expect($el.text()).to.equal(name);
  })
});
