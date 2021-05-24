import React from 'react'
import RiskLevelProgressBar from '.'
import { create } from 'react-test-renderer'

describe('Test Progress Bar', () => {
  it('should render a progress bar', () => {
    const progressBar = create(<RiskLevelProgressBar riskLevel={3} />).toJSON()
    expect(progressBar).toMatchSnapshot()
  })
})
