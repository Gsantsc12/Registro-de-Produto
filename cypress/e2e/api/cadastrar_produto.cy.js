describe('Cadastro de Produto - API', () => {
  it('Deve cadastrar um novo produto com sucesso', () => {
    cy.fixture('produto').then((produto) => {
      cy.cadastrarProduto(produto).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq('Cadastro de produto realizado com sucesso.');
        expect(response.body).to.have.property('sku');

        cy.log(`✅ SKU gerado: ${response.body.sku}`);
      });
    });
  });
});
