describe('Formulario Registro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173');
        cy.get('[href="/register"]').click()
    })


    it('Mostrar error si el nombre es menor a 3 caracteres', () => {
        cy.get('input[name="name"]').type('Jo');
        cy.get('form').submit();
        cy.get('div.text-danger')
            .should('be.visible')
            .and('contain', 'El nombre debe tener al menos 3 caracteres');
    });

    it('No debe mostrar error si el nombre es mayor a 4 caracteres', () => {
        cy.get('input[name="name"]').type('Roberto Carlos');
        cy.get('form').submit();
        cy.get('form :nth-child(1) > .text-danger').should('not.exist');
    });

    it('Debe mostrar error si los parámetros no coinciden', () => {
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password321');
        cy.get('form').submit();
        cy.get('div.text-danger')
            .should('be.visible')
            .and('contain', 'Las contraseñas no coinciden');
    });

    it('Mostrar mensaje de confirmación al enviar todos los datos', () => {
        cy.get('input[name="name"]').type('Erick Porroa');
        cy.get('input[name="email"]').type('eporroa@example.cl');        
        cy.get('input[name="phone"]').type('555-2233');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('form').submit();
        cy.contains('Gracias por registrarte')
            .should('be.visible')
            .and('contain', 'eporroa@example.cl');
    });


})