import React from 'react'
import { create } from 'react-test-renderer'
import Chart from '.'

describe('Test Chart component', () => {
  it('should render Chart', () => {
    const props = {
      investmentValue: 10,
      riskLevel: 3,
      yearsInvestment: 1,
      cones: [{ riskLevel: 3, mu: 0.0216, sigma: 0.0215 }]
    }
    const chart = create(<Chart {...props} />).toJSON()
    expect(chart).toMatchSnapshot()
  })
})
