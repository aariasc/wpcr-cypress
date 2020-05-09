/// <reference types="Cypress" />

import Chance from 'chance'
const chance = new Chance()

describe('03 Comprar', function () {
  beforeEach(function () {
    cy.fixture('productData.json').as('productData')
  })
  it('Comprar un producto', function () {
    // Navegar al sitio
    cy.visit(`${this.productData.productUrl}`)

    // Titulo del browser
    cy.title().should('eq', this.productData.siteTitle)

    cy.log('revisando titulo')

    // Titulo
    cy.get('.site-logo-img').should('be.visible')

    // Foto del producto
    cy.get('.woocommerce-product-gallery__image').should('be.visible')

    cy.get('.product_title')
      .should('be.visible')
      .should('contain.text', this.productData.productName)

    cy.get('.price').should('be.visible').should('contain.text', '$')
    cy.get('.price').should('be.visible').should('contain.text', this.productData.productPrice)

    cy.get('.woocommerce-product-details__short-description').should('be.visible')

    cy.get('button[name="add-to-cart"]').should('be.visible').should('be.enabled')

    cy.get('button[name="add-to-cart"]').click()

    cy.get('a.button').contains('Ver carrito').should('be.visible').click()

    cy.get('button').contains('Actualizar Carrito').should('be.not.be.enabled')

    cy.get('a.checkout-button').click()

    cy.get('.woocommerce-billing-fields h3').should('contain.text', 'Detalles de facturación')

    cy.get('#billing_first_name').type(chance.first())
    cy.get('#billing_last_name').type(chance.last())
    cy.get('#billing_address_1').type(chance.address())
    cy.get('#billing_city').type(chance.city())
    cy.get('#billing_state').type(chance.state())
    cy.get('#billing_phone').type(chance.phone())
    cy.get('#billing_email').type(chance.email())
    cy.get('#billing_postcode').type(chance.zip())

    cy.get('#place_order').should('be.enabled').click()

    cy.get('.woocommerce-order-overview__payment-method').should(
      'contain',
      'Transferencia bancaria directa'
    )
  })
})
