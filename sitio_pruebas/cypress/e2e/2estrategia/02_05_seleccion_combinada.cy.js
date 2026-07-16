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
    
    it('está presente el inicio de sesión', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Iniciar Sesión')
    })

    it('está presente el botón de opción A', () => {
        cy.visit('http://localhost:5173/');
        // primero selecciona todas las etiquetas con <a (GET), luego busca texto con "opción A"
        cy.get('a').contains('opción A');
        // o se seleccionan las etiquetas "a" de tipo botón, con el enlace por texto
        cy.get('a.btn').contains('opción B');
    })

})
