/// <reference types="Cypress" />

describe('05 Revisar Shortcode', function () {
  it('Ir a pagina About y revisar shortcode', function () {
    // Navegar al sitio
    cy.visit('https://cypress.coffeemakerideas.com/about/')

    // Titulo del browser
    cy.title().should('eq', 'About – Cypress Demo')

    // Titulo
    cy.get('.mi-plugin-wrapper').should('be.visible')
  })
})
