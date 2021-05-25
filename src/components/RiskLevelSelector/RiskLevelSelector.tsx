import { appConfig } from '@/config'
import React from 'react'

type RiskLevelSelector = {
  riskLevel: number
  handleRiskLevel(event: React.ChangeEvent<HTMLSelectElement>): void
}

const RiskLevelSelector: React.FC<RiskLevelSelector> = ({ riskLevel, handleRiskLevel }) => {
  const options = []
  const { MINIMUM_RISK_LEVEL, MAXIMUM_RISK_LEVEL } = appConfig

  for (let i = MINIMUM_RISK_LEVEL; i <= MAXIMUM_RISK_LEVEL; ++i) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }

  return (
    <select data-cy="riskLevelSelector" onChange={handleRiskLevel} value={riskLevel}>
      {options}
    </select>
  )
}

export { RiskLevelSelector }
