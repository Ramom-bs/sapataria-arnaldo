describe('testes da nav bar', function () {
    before(function () {

        cy.log('iniciando testes do navbar');


    });


    beforeEach(function () {


        cy.visit('/index.html');



    });

    it('deve ter a classe .navbar', function () {

        cy.visit('/index.html');
        cy.get('nav').should('have.class', 'navbar');

    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Teste href', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test=home]').should('have.attr', 'href', 'index.html');
        cy.get('[data-test=sobre-nos]').should('have.attr', 'href', 'about-us.html');
        cy.get('[data-test=contato]').should('have.attr', 'href', 'contact.html');
        /* ==== End Cypress Studio ==== */
    });
})