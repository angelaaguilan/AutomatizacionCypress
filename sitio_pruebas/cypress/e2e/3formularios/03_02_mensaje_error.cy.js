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

})