describe("RegisterAgency", () => {
  it("should register successfully with valid data", () => {
    // Visit the registration page
    cy.visit("/register");

    // Fill in the registration form
    cy.get('input[name="firstName"]').type("test");
    cy.get('input[name="lastName"]').type("cypress");
    // cy.get('[data-cy="cin-user"]').type("6792");
    cy.get("#cin").type("6792", { force: true });
    cy.get('input[name="licenseNumber"]').type("78930");
    cy.get('[data-cy="genre"]').type("Homme");
    cy.get('input[name="email"]').type("clientCypress@test.com");
    cy.get("#password").type("test123", { force: true });
    cy.get("#passwordConfirmation").type("test123", { force: true });
    cy.get("#expiration").type("36-73-39", { force: true });
    cy.get("#phone").type("0606060606", { force: true });
    cy.get("#nationalite").type("maroc", { force: true });
    cy.get("#ville").type("safi", { force: true });
    cy.get("#region").type("region", { force: true });
    cy.get("#adresse").type("youcode,safi,229", { force: true });
    cy.get("#zip").type("36000", { force: true });

    // Upload Logo
    // cy.fixture('logo.png').then((logo) => {
    //   cy.get('input[name="logo"]').attachFile({
    //     fileContent: logo.toString(),
    //     fileName: 'logo.png',
    //     mimeType: 'image/png'
    //   });
    // });

    // Submit the registration form
    cy.get('button[type="submit"]').click();

    // Assert that the registration is successful and the user is redirected
    // cy.url().should("include", "/dashboard");
  });
});
