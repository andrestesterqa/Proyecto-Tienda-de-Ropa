Cypress.Commands.add('login', function (email, password) {
    cy.fixture('login').then(function (login) {
        cy.get(login.loginLink).click()
        cy.get(login.email).type(email)
        cy.get(login.password).type(password)
        cy.get(login.submitButton).click()
})
})