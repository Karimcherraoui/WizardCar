
describe('Login', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('client@test.com');
    cy.get('input[name="password"]').type('test123');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/');
  });

 
});
