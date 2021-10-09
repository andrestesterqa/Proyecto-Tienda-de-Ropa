/// <reference types="Cypress" />

describe("Searh elements", function () {
    beforeEach(function () {
        cy.visit('/')
    })
    it('Search for elements with multiple', function () {
        cy.fixture('index').then((index)=> {
        cy.get(index.searchBox).type('dress');
        cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'dress')

        })
    })
    it('Search for elements with no results', function () {
        cy.fixture('index').then((index)=> {
        cy.get(index.searchBox).type('qwerty');
        cy.get(index.searchButton).click()
        
    })
        cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.alert).should('contain', 'No results were found ')  
    })
})

})