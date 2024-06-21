///<reference types="Cypress"/> 
//Con que se ponga lo de arriba en alguno de los tests, vale

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Commands').click();
    cy.contains('Traversal').click();
    cy.get('.banner > .container').should('contain', 'Traversal');
  })
})