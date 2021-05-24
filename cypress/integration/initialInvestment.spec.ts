context('Initial Investments page', () => {
  const initialValues = {
    investmentValue: '10000',
    riskLevel: '3',
    yearsInvestment: '1'
  }

  it('should load page with default values', () => {
    cy.loadInitialValues(initialValues)
  })
  it('should set correct progress bar color on risk level change', () => {
    cy.loadInitialValues(initialValues)
    cy.get('[data-cy=riskLevelSelector]').select('5')
    cy.get('[data-cy=progressBar]').should('have.css', 'background-color', 'rgb(0, 128, 0)')
    cy.get('[data-cy=riskLevelSelector]').select('13')
    cy.get('[data-cy=progressBar]').should('have.css', 'background-color', 'rgb(255, 165, 0)')
    cy.get('[data-cy=riskLevelSelector]').select('25')
    cy.get('[data-cy=progressBar]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})
