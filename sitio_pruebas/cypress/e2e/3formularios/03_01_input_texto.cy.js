describe('Formulario Registro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173');
        cy.get('[href="/register"]').click()
    })


    it('Mostrar error si es menor a 3 caracteres', () => {
        // con el input se selecciona el elemento, luego se escribe con type  
        // 1. Escribimos un nombre de solo 2 caracteres para forzar el error
        cy.get('input[name="name"]').type('Jo');
        
        // 2. Enviamos el formulario
        cy.get('form').submit();
        
        // 3. Buscamos el div.text-danger que esté específicamente relacionado con el input 'name'
        // NOTA: Si tus errores están dentro de un contenedor por campo, ayuda ser más específico:
        cy.get('div.text-danger')
            .should('be.visible')
            // este mensaje debe ser igual al que aparece en pantalla
          .and('contain', 'El nombre debe tener al menos 3 caracteres');
    });
})