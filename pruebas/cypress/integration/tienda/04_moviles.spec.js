/// <reference types="Cypress" />

const checkMobileMenu = function (cy) {
  cy.get('#primary-menu').should('not.be.visible')
  cy.get('button.menu-toggle').should('be.visible').click()

  cy.get('.navigation-accessibility li')
    .should('have.length', 5)
    .should('contain.text', 'Home')
    .should('contain', 'Shop')
    .should('contain', 'Testimonials')
    .should('contain', 'About')
    .should('contain', 'Contact')

  cy.get('button.menu-toggle').should('be.visible').click()
}

describe('Dispositivos Moviles', function () {
  it('Apple', function () {
    cy.visit('')

    // cy.viewport(320, 480)

    //cy.pause()

    cy.viewport('iphone-6')
    checkMobileMenu(cy)

    cy.viewport('iphone-6', 'landscape')
    checkMobileMenu(cy)

    cy.viewport('ipad-2')
    checkMobileMenu(cy)
  })
})
