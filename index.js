Cypress.Commands.add(
  "attributes",
  { prevSubject: "element" },
  (subject, attributes) => {
    Object.keys(attributes).forEach((attribute) => {
      cy.wrap(subject).should("have.attr", attribute, attributes[attribute]);
    });

    return cy.wrap(subject);
  }
);
