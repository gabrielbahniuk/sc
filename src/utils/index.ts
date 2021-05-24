import { appConfig } from '@/config'

const {
  MINIMUM_INITIAL_INVESTMENT,
  MINIMUM_YEARS_INVESTMENT,
  MAXIMUM_YEARS_INVESTMENT,
  MINIMUM_RISK_LEVEL,
  MAXIMUM_RISK_LEVEL
} = appConfig

const isValueInclusiveBetween = (value: number, min: number, max: number): boolean => value >= min && value <= max

const isValidYear = (year: number): boolean =>
  Number.isInteger(year) && isValueInclusiveBetween(year, MINIMUM_YEARS_INVESTMENT, MAXIMUM_YEARS_INVESTMENT)

const isValidInvestment = (investmentValue: number): boolean =>
  Number.isInteger(investmentValue) && investmentValue >= MINIMUM_INITIAL_INVESTMENT

const isValidRiskLevel = (riskLevel: number): boolean =>
  Number.isInteger(riskLevel) && isValueInclusiveBetween(riskLevel, MINIMUM_RISK_LEVEL, MAXIMUM_RISK_LEVEL)

const formatCurrency = (value: number): string =>
  Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)

export { isValidYear, isValidInvestment, isValidRiskLevel, formatCurrency }
