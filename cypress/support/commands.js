Cypress.Commands.add('cadastrarProduto', (payload) => {
  cy.request({
    method: 'POST',
    url: '/registrarProduto/', // baseUrl + essa rota
    body: payload,
    headers: {
      Authorization: `Bearer ${Cypress.env('token')}`,
    },
  });
});
