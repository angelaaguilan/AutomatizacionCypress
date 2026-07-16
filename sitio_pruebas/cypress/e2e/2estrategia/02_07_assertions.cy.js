describe('pagina principal', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    })

    // assertions permite verificar que no solamente se encuentren los elementos dentro del código
    // si no, que también funcionen cómo lo deseamos

    it('Abre la página principal', () => {
        cy.url().should('include', 'localhost');
    })

    // evaluar que se encuentre dentro del código de nuestra aplicación y que se vea
    it('está presente el menu de navegación', () => {
        cy.get('.navbar')
            .should('exist')
            // evaluar que no sea visible
            //.and('not.be.visible')
            .and('be.visible');
    })

    // evaluar que tenga un atributo en particular
    it('examina atributos de imagen', () => {
        cy.get('[alt="imagen opción 1"]')
            // que tenga atributo "attr",examinar que el atributo "alt" tenga el valor "imagen opcion 1"
            .should('have.attr', 'alt', 'imagen opción 1');
    })
    
    // evaluar el comportamiento del enlace
    it('está presente el inicio de sesión', () => {
        cy.contains('Iniciar Sesión')
            // examinar que tenga un atributo "href"
            .should('have.attr', 'href')
            // examinar que incluya dentro de la dirección, que aparezca "/login"
            .and('include', '/login');
    })

    it('está presente el botón de opción A', () => {
        cy.get('a.btn').contains('opción A')
            .should('exist')
            // tenga una clase en particular que sea la clase que define a ese botón "btn-primary"
            .and('have.class', 'btn btn-primary');
    })

})
