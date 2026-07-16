// esto se ejecuta con:
// npx cypress open
// o con el comando:
// npx cypress run --spec "cypress/e2e/02_01_estructura_test.cy.js"

describe('pagina principal', () => {

//  it('False: Abre la versión en español', () => {
    // entrar a la página
//    cy.visit('http://localhost:5173/');
    //examina que la ruta sea la correcta, una pagina en español
//    cy.url().should('include', '/es')  
//  })

  it('Abre la página principal:', () => {
    cy.visit('http://localhost:5173/');
    // examina si la ruta incluye el texto "localhost"
    cy.url().should('include', 'localhost')
  })

})