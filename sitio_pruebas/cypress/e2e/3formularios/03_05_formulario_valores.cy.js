describe('Formulario Registro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173');
        cy.get('[href="/register"]').click()
    })

    it('Verifica que se envíen los datos y método correcto', () => {
        cy.intercept('POST', '/api/registro', (req) => {
            expect(req.body).to.include({
                name: 'Erick Porroa',
                email: 'eporroa@example.cl',
                phone: '555-2233',
                password: 'password123',
                confirmPassword: 'password123'
            });
        }).as('registerRequest') ;

        cy.get('input[name="name"]').type('Erick Porroa');
        cy.get('input[name="email"]').type('eporroa@example.cl');        
        cy.get('input[name="phone"]').type('555-2233');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('form').submit();
        cy.wait('@registerRequest');
    });

})