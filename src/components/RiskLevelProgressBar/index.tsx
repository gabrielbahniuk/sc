import React from 'react'

import { ProgressBar, ProgressLabelContainer } from './styles'

type RiskLevelProgressBar = {
  riskLevel: number
}

const RiskLevelProgressBar: React.FC<RiskLevelProgressBar> = ({ riskLevel }) => {
  return (
    <>
      <ProgressBar riskLevel={riskLevel}>
        <span data-cy="progressBar"></span>
      </ProgressBar>
      <ProgressLabelContainer>
        <span>Low Risk</span>
        <span>High Risk</span>
      </ProgressLabelContainer>
    </>
  )
}

export default RiskLevelProgressBar
