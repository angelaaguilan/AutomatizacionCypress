// esto se ejecuta con:
// npx cypress run --spec "cypress/e2e/02_01_estructura_test.cy.js"
// npx cypress open

describe('pagina principal', () => {

    // funcion simplifica de javascript
    // ejecuta esta función por cada una de las pruebas
    // si se usa solo before, lo ejecuta solo para la  primera prueba
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    })

    it('Abre la página principal', () => {
        cy.url().should('include', 'localhost');
    })

    it('examina el menu de navegación', () => {
        cy.get('.navbar');
    })

    it('examina atributos de imagen', () => {
        cy.get('[alt="imagen opción 1"]')
    })
    
    it('está presente el inicio de sesión', () => {
        cy.contains('Iniciar Sesión')
    })

    it('está presente el botón de opción A', () => {
        // primero selecciona todas las etiquetas con <a (GET), luego busca texto con "opción A"
        cy.get('a').contains('opción A');
        // o se seleccionan las etiquetas "a" de tipo botón, con el enlace por texto
        cy.get('a.btn').contains('opción B');
    })

})
