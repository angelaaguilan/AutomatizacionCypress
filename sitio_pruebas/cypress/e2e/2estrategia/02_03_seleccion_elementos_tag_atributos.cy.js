// esto se ejecuta con:
// npx cypress run --spec "cypress/e2e/02_01_estructura_test.cy.js"
// npx cypress open

describe('pagina principal', () => {

    it('Abre la página principal', () => {
        cy.visit('http://localhost:5173/');
        cy.url().should('include', 'localhost');
    })

    it('examina el menu de navegación', () => {
        cy.visit('http://localhost:5173/');
        cy.get('.navbar');
    })

    it('examina atributos de imagen', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[alt="imagen opción 1"]')
    })
    
    
})
