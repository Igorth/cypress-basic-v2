Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Igor')
    cy.get('#lastName').type('Dias')
    cy.get('#email').type('tes@ttet.ca')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})