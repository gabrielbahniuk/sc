import React, { createContext, ReactNode, useState, useContext } from 'react'
import { isValidYear, isValidInvestment, isValidRiskLevel } from '@/utils'

import { appConfig } from '@/config'
import { useHistory } from 'react-router-dom'

interface InvestmentsProviderProps {
  children: ReactNode
}

type InvestmentsContextData = {
  initialInvestment: number
  amountInvestmentYears: number
  riskLevel: number
  handleReset(): void
  handleRiskLevel(event: React.ChangeEvent<HTMLSelectElement>): void
  handleAmountInvestmentYears(event: React.ChangeEvent<HTMLInputElement>): void
  handleInitialInvestment(event: React.ChangeEvent<HTMLInputElement>): void
  MINIMUM_YEARS_INVESTMENT: number
  MAXIMUM_YEARS_INVESTMENT: number
  MINIMUM_INITIAL_INVESTMENT: number
}

const InvestmentsContext = createContext<InvestmentsContextData>({} as InvestmentsContextData)

export const InvestmentsProvider: React.FC = ({ children }: InvestmentsProviderProps) => {
  const history = useHistory()
  const { MINIMUM_INITIAL_INVESTMENT, MINIMUM_YEARS_INVESTMENT, MAXIMUM_YEARS_INVESTMENT, MINIMUM_RISK_LEVEL } =
    appConfig

  const [initialInvestment, setInitialInvestment] = useState(MINIMUM_INITIAL_INVESTMENT)
  const [amountInvestmentYears, setAmountInvestmentYears] = useState(MINIMUM_YEARS_INVESTMENT)
  const [riskLevel, setRiskLevel] = useState(MINIMUM_RISK_LEVEL)

  function handleReset(): void {
    setInitialInvestment(MINIMUM_INITIAL_INVESTMENT)
    setAmountInvestmentYears(MINIMUM_YEARS_INVESTMENT)
    setRiskLevel(MINIMUM_RISK_LEVEL)
    history.push('/')
  }

  function handleInitialInvestment(evt: React.ChangeEvent<HTMLInputElement>): void {
    const initialValue = parseInt(evt.target.value)
    if (!isValidInvestment(initialValue)) {
      return
    }
    setInitialInvestment(initialValue)
  }

  function handleRiskLevel(evt: React.ChangeEvent<HTMLSelectElement>): void {
    const riskLevel = parseInt(evt.target.value)
    if (!isValidRiskLevel(riskLevel)) {
      return
    }
    setRiskLevel(riskLevel)
  }

  function handleAmountInvestmentYears(evt: React.ChangeEvent<HTMLInputElement>): void {
    const investmentYears = parseInt(evt.target.value)
    if (!isValidYear(investmentYears)) {
      return
    }
    setAmountInvestmentYears(investmentYears)
  }

  return (
    <InvestmentsContext.Provider
      value={{
        initialInvestment,
        riskLevel,
        amountInvestmentYears,
        handleAmountInvestmentYears,
        handleRiskLevel,
        handleReset,
        handleInitialInvestment,
        MINIMUM_INITIAL_INVESTMENT,
        MINIMUM_YEARS_INVESTMENT,
        MAXIMUM_YEARS_INVESTMENT
      }}
    >
      {children}
    </InvestmentsContext.Provider>
  )
}

export const useInvestments = (): InvestmentsContextData => useContext(InvestmentsContext)
