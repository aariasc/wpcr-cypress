/// <reference types="Cypress" />

describe('01 Revisar Homepage', function () {
  it('Tener un homepage bien armado', function () {
    cy.visit('https://cypress.coffeemakerideas.com/')

    cy.log('Revisando title del sitio')
    cy.title().should('eq', 'Cypress Demo – Otro sitio realizado con WordPress')

    cy.log('Click al boton View More')
    cy.get('.elementor-element-d3f565c .elementor-button-text').click()

    cy.log('Revisar menu principal visible')
    cy.get('#primary-menu').should('be.visible')

    cy.log('Revisando banner header visible')
    cy.get('.elementor-element-67e1d4f').should('be.visible')

    cy.log('Revisar contenido del menu')
    cy.get('#primary-menu')
      .children('li')
      .should('have.length', 5)
      .should('contain.text', 'Home')
      .should('contain', 'Shop')
      .should('contain', 'Testimonials')
      .should('contain', 'About')
      .should('contain', 'Contact')

    cy.log('Revisar que salgan productos')
    cy.get('.elementor-element-398106a .astra-shop-thumbnail-wrap').should('have.length', 8)

    cy.log('Revisar que al menos salga un producto en el home')
    cy.get('.astra-shop-thumbnail-wrap').should('have.length.gte', 1)

    cy.log('Revisar que al menos salga un producto latest en el home')
    cy.get('.elementor-element-8b5e740 .astra-shop-thumbnail-wrap').should(
      'have.length.greaterThan',
      1
    )
  })
})
