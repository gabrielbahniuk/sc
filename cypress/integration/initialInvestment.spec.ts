context('Initial Investments page', () => {
  const initialValues = {
    investmentValue: '10000',
    riskLevel: '3',
    yearsInvestment: '1'
  }
  const newValues = {
    investmentValue: '11000',
    riskLevel: '4',
    yearsInvestment: '2'
  }
  const url = 'http://localhost:3000'

  it('should load page with default values', () => {
    cy.visit(url)
    cy.loadInitialValues(initialValues)
  })
  it('should be able to change default values', () => {
    cy.visit(url)
    cy.loadInitialValues(initialValues)
    cy.setNewValues(newValues)
  })
  it('should set correct progress bar color on risk level change', () => {
    cy.visit(url)
    cy.loadInitialValues(initialValues)
    cy.get('[data-cy=riskLevelSelector]').select('5')
    cy.get('[data-cy=progressBar]').should('have.css', 'background-color', 'rgb(0, 128, 0)')
    cy.get('[data-cy=riskLevelSelector]').select('13')
    cy.get('[data-cy=progressBar]').should('have.css', 'background-color', 'rgb(255, 165, 0)')
    cy.get('[data-cy=riskLevelSelector]').select('25')
    cy.get('[data-cy=progressBar]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})
