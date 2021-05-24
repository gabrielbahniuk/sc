import React from 'react'
import { useHistory } from 'react-router-dom'
import { useInvestments } from '@/hooks'
import RiskLevelSelector from '@/components/RiskLevelSelector'
import RiskLevelProgressBar from '@/components/RiskLevelProgressBar'
import Button from '@/components/Button'

const Form: React.FC = () => {
  const history = useHistory()
  const {
    initialInvestment,
    riskLevel,
    amountInvestmentYears,
    handleInitialInvestment,
    handleRiskLevel,
    handleAmountInvestmentYears,
    MINIMUM_INITIAL_INVESTMENT,
    MINIMUM_YEARS_INVESTMENT,
    MAXIMUM_YEARS_INVESTMENT
  } = useInvestments()

  function handleNextPage(): void {
    history.push('/result')
  }

  return (
    <form>
      <label>
        Initial Investment
        <input
          type="number"
          step="1000"
          data-cy="initialInvestment"
          min={MINIMUM_INITIAL_INVESTMENT}
          value={initialInvestment}
          onChange={handleInitialInvestment}
        />
      </label>
      <label>
        How many years?
        <input
          type="number"
          min={MINIMUM_YEARS_INVESTMENT}
          max={MAXIMUM_YEARS_INVESTMENT}
          step="1"
          data-cy="amountInvestmentYears"
          value={amountInvestmentYears}
          onChange={handleAmountInvestmentYears}
        />
      </label>
      <label>
        Risk Level
        <RiskLevelSelector data-cy="riskLevelSelector" riskLevel={riskLevel} handleRiskLevel={handleRiskLevel} />
      </label>
      <RiskLevelProgressBar riskLevel={riskLevel} />
      <Button data-cy="btnCalculate" onClick={handleNextPage}>
        Calculate
      </Button>
    </form>
  )
}

export default Form
