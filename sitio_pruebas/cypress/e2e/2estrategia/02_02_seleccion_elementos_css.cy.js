// esto se ejecuta con:
// npx cypress run --spec "cypress/e2e/02_01_estructura_test.cy.js"
// npx cypress open

describe('pagina principal', () => {
  //examina que la ruta sea la correcta
  it('Abre la página principal', () => {
    cy.visit('http://localhost:5173/');
    cy.url().should('include', 'localhost')
  })

  // examina menús utilizando selectores
  it('examina el menu de navegación', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.navbar')

  })

})
