describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "urls"})
    cy.visit("http://localhost:3000/");
  })
  it("Should display the page title and existing shortened URLs", () => {
    cy.get("h1").contains("URL Shortener").should("be.visible");
    cy.get(".url").should("have.length", 3);
    cy.get(':nth-child(1) > h3.url-link').contains("Awesome photo").should("be.visible");
    cy.get(':nth-child(1) > a.url-link').contains("http://localhost:3001/useshorturl/1").should("be.visible");
    cy.get(':nth-child(2) > h3.url-link').contains("ducks").should("be.visible");
    cy.get(':nth-child(2) > a.url-link').contains("http://localhost:3001/useshorturl/2").should("be.visible");
    cy.get(':nth-child(3) > h3.url-link').contains("coffee").should("be.visible");
    cy.get(':nth-child(3) > a.url-link').contains("http://localhost:3001/useshorturl/3").should("be.visible");
  });
  it("Should display a form and inputs", () => {
    cy.get('[placeholder="Title..."]').should("be.visible");
    cy.get('[placeholder="URL to Shorten..."]').should("be.visible");
    cy.get("button").contains("Shorten Please!").should("be.visible");
  });
  it("Should be able to fill out the form when a user types", () => {
    cy.get('[placeholder="Title..."]').type("Babies").should("have.value", "Babies");
    cy.get('[placeholder="URL to Shorten..."]').type("www.babiesarecute.com").should("have.value", "www.babiesarecute.com");
  })
})