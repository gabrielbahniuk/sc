context('Result page', () => {
  const initialValues = {
    investmentValue: '10000',
    riskLevel: '3',
    yearsInvestment: '1'
  }
  const url = 'http://localhost:3000'

  it('should render Loading spinner while cones array is empty', () => {
    cy.intercept('GET', '**/api/cones', { fixture: 'cones/empty.json' })
    cy.visit(url)
    cy.loadInitialValues(initialValues)
    cy.get('[data-cy=btnCalculate]').click()
    cy.get('[data-cy=loadingComponent]').should('have.length', 1)
  })

  it('should calculate investments with cones array', () => {
    cy.intercept('GET', '**/api/cones', { fixture: 'cones/cones.json' })
    cy.visit(url)
    cy.loadInitialValues(initialValues)
    cy.get('[data-cy=btnCalculate]').click()
    cy.get('[data-cy=resultContainer]').should('have.length', 1)
    cy.get('[data-cy=titleResult]').should('have.length', 1)
    cy.get('[data-cy=btnReset]').should('have.length', 1)
    cy.get('[data-cy=btnToggleTable]').should('have.length', 1)
    cy.get('canvas').should('exist')
  })
})
