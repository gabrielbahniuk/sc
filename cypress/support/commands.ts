// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    loadInitialValues: (values: InputValues) => Chainable<Subject>
    setNewValues: (values: InputValues) => Chainable<Subject>
  }
}

type InputValues = {
  url?: string
  investmentValue: string
  yearsInvestment: string
  riskLevel: string
}

Cypress.Commands.add('loadInitialValues', ({ url = 'http://localhost:3000', ...initialValues }: InputValues) => {
  const { investmentValue, riskLevel, yearsInvestment } = initialValues
  cy.visit(url)
  cy.get('[data-cy=initialInvestment]').should('have.value', investmentValue)
  cy.get('[data-cy=amountInvestmentYears]').should('have.value', yearsInvestment)
  cy.get('[data-cy=riskLevelSelector]').should('have.value', riskLevel)
})

Cypress.Commands.add('setNewValues', ({ ...newValues }: InputValues) => {
  const { investmentValue, riskLevel, yearsInvestment } = newValues

  cy.get('[data-cy=initialInvestment]').type('{uparrow}').should('have.value', investmentValue)
  cy.get('[data-cy=amountInvestmentYears]').type('{uparrow}').should('have.value', yearsInvestment)
  cy.get('[data-cy=riskLevelSelector]').select(riskLevel).should('have.value', riskLevel)
})
