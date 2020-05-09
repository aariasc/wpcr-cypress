/// <reference types="Cypress" />

import Chance from 'chance'
const chance = new Chance()

describe('02 Revisar Producto', function () {
  it('Ir a un producto', function () {
    // Navegar al sitio
    cy.visit('https://cypress.coffeemakerideas.com/producto/acme-skin-toner/')

    // Titulo del browser
    cy.title().should('eq', 'Acme Skin Toner – Cypress Demo')

    cy.log('revisando titulo')

    // Titulo
    cy.get('.site-logo-img').should('be.visible')

    // Foto del producto
    cy.get('.woocommerce-product-gallery__image').should('be.visible')

    cy.get('.product_title').should('be.visible').should('contain.text', 'Acme Skin Toner')

    cy.get('.price').should('be.visible').should('contain.text', '$')

    cy.get('.woocommerce-product-details__short-description').should('be.visible')

    cy.get('button[name="add-to-cart"]').should('be.visible').should('be.enabled')

    const cantidad = chance.integer({min: 1, max: 20})

    cy.get('input[name="quantity"]')
      .should('be.visible')
      .should('be.enabled')
      .clear()
      .type(cantidad)
      .should('have.value', cantidad.toString())

    cy.get('.description_tab').should('be.visible')

    cy.get('.reviews_tab').click()

    cy.get('#reviews').should('be.visible').as('reviewsTab')

    cy.get('@reviewsTab').find('.comment-reply-title').should('contain.text', 'Acme Skin Toner')
  })
})
