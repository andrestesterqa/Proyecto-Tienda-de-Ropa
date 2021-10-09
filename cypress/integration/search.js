/// <reference types="Cypress" />

describe("Searh elements", function () {
    beforeEach(function () {
        cy.visit('/')
    })
    it('Search for elements with multiple', function () {
        cy.search('dress')
        cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.title).should('contain', 'dress')

        })
    })
    it('Search for elements with no results', function () {
        cy.search('qwerty')
        cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.alert).should('contain', 'No results were found ')  
    })
})

})