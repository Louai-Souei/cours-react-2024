describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });

  it("H1", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Lou");
  });
});
