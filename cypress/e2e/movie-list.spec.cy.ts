/// <reference types="cypress" />

describe("movie-list-page", () => {
  it("can load the page", () => {
    cy.visit("/");
    cy.get(".movie").should("have.length.at.least", 1);
  });
  it("can search in the page", () => {
    cy.visit("/");
    cy.get("[data-testid='search-header-input']").type("girl");
    cy.get("[data-testid='search-header-button']").click();
    cy.get(".movie .name").contains("Girl");
  });
  it("can open details", () => {
    cy.visit("/");
    cy.get(".movie").first().click();
    cy.url().should("include", "/movies/1");
  });
});
