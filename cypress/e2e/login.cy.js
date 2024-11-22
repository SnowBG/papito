describe('Login', () => {
  it('Logar com sucesso', () => {
    cy.visit('https://playground.cyskills.com.br')

    cy.contains('h2', 'Faça login').should('be.visible')
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')
    cy.get('[data-cy="login-button"]').click()

    cy.get('[data-cy="welcome-title"]').should('be.visible').and('have.text', 'Boas vindas ao Cypress Playground')
    
    
  })


  it('Não deve logar com senha inválida', () => {
    cy.visit('https://playground.cyskills.com.br')

    cy.contains('h2', 'Faça login').should('be.visible')
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtkime')
    cy.get('[data-cy="login-button"]').click()

    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')
    
    
  })
})

it.only('Não deve logar com e-mail inválido', () => {
  cy.visit('https://playground.cyskills.com.br')

  cy.contains('h2', 'Faça login').should('be.visible')
  cy.get('[data-cy="email"]').type('teste@cyskills.com.br')
  cy.get('[data-cy="password"]').type('showtime')
  cy.get('[data-cy="login-button"]').click()

  cy.get('.notice p')
    .should('be.visible')
    .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')
  
  
})
