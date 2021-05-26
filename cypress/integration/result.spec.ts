context('Result page', () => {
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

  it('should render Error component if empty cones array', () => {
    cy.loadInitialValues(initialValues)
    cy.setNewValues(newValues)
    cy.intercept('**/api/cones', { fixture : 'cones/empty.json'})
    cy.get('[data-cy=btnCalculate]').click()
    cy.get('[data-cy=titleError]').should('have.length', 1)
    cy.get('[data-cy=btnReset]').should('have.length', 1)
  })

  it('should calculate investments with cones array', () => {
    cy.loadInitialValues(initialValues)
    cy.setNewValues(newValues)
    cy.intercept('GET', '**/api/cones', { fixture: 'cones/cones.json' })
    cy.get('[data-cy=btnCalculate]').click()
    cy.get('[data-cy=titleResult]').should('have.length', 1)
    cy.get('[data-cy=btnReset]').should('have.length', 1)
    cy.get('[data-cy=btnToggleTable]').should('have.length', 1)
    cy.get('canvas').should('exist')
  })
})
