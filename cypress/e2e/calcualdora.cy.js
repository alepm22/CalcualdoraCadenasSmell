describe('Pruebas para calcularSumaCadenas', () => {
  
    it('Devuelve 0 si la cadena está vacía', () => {
      cy.visit('/');
      cy.get('#input-cadena').clear(); // Asegura que el campo esté vacío
      cy.get('#btn-calcular').click();
      cy.get('#resultado-div').should('contain', '0'); // Verifica que el resultado sea 0
    });
  
    it('Devuelve 1 si la cadena ingresa 1', () => {
      cy.visit('/');
      cy.get('#input-cadena').type('1'); // Ingresa el número 1 como string
      cy.get('#btn-calcular').click();
      cy.get('#resultado-div').should('contain', '1'); // Verifica que el resultado sea 1
    });
    
  });
  