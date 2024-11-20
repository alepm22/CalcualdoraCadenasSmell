describe('Pruebas para calcularSumaCadenas', () => {
    it('Devuelve 0 si la cadena está vacía', () => {
      cy.visit('/');
      //campo esté vacío
      cy.get('#input-cadena').clear();
      cy.get('#btn-calcular').click();
      cy.get('#resultado-div').should('contain', '0');
    });
  });
  