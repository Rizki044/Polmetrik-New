// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const username = ".css-1wpyscx";
const password = ".css-7lq7et";
const button = ".css-1ce0nau";
Cypress.Commands.add("login", () => {
    cy.visit("https://app.polmetrik.id/");
    cy.get(username).type("produkumum");
    cy.get(password).type("polmetrik2024");
    cy.get(button).click();

  cy.get(".css-6ct1tc > .MuiTypography-root", { timeout: 30000 }).contains("Dashboard");
});
    
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })