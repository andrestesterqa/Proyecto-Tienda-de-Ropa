/// <reference types="Cypress" />

describe("Add to shopping cart", function() {
    beforeEach(function() {
        cy.viewport(1024, 768)
        cy.visit("/")
    })
    it("Add a product from listing home", function() {
        cy.get(".blockbestsellers[data-toggle='tab']").click()
        cy.get(".product_list.grid.row.blockbestsellers.tab-pane.active").should("be.visible")
        cy.get(".product_list.grid.row.blockbestsellers.tab-pane.active li:first-child").trigger('mouseover')

    })

})