describe('testes na home', () => {
  it('abrir o diretório', () => {

    cy.visit('/')

  })

  it('abrir a pagina do index', () => {

    cy.visit('/index.html')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('título da pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('img').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('ul > :nth-child(1) > a').click();
    cy.get('p').should('have.text', 'Seja bem-vindo ! ');
    cy.get('img').click();
    /* ==== End Cypress Studio ==== */
  });
})