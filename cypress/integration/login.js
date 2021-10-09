/// <reference types="Cypress" />
describe("Login", function () {
    beforeEach(function () {
        cy.visit('/')
    })
    it('Login with incorrect email', function () {
        cy.login('some-email', 'password')
        cy.fixture('login').then(function (login) {
            cy.get(login.incorrectLoginLabel).should('contain', 'Invalid email address')

        })
        
    })
})