import React from 'react'
import useTimeSeries from '@/hooks/useTimeSeries'
import { appConfig } from '@/config'
import { formatCurrency } from '@/utils'

import { Container } from './styles'

type ConeProps = {
  riskLevel: number
  mu: number
  sigma: number
}

type TableProps = {
  yearsInvestment: number
  cones: ConeProps[]
  investmentValue: number
  riskLevel: number
  isVisible: boolean
}

const Table: React.FC<TableProps> = ({ investmentValue, yearsInvestment, cones, riskLevel, isVisible }) => {
  const { mu, sigma } = cones.filter((cone) => cone.riskLevel === riskLevel)[0]
  const { FEE, MONTHLY_SUM } = appConfig

  const { tableData } = useTimeSeries({
    years: yearsInvestment,
    initialSum: investmentValue,
    fee: FEE,
    mu,
    sigma,
    monthlySum: MONTHLY_SUM
  })

  const { labels, dataBad, dataGood, dataMedian } = tableData

  return (
    <>
      {isVisible && (
        <Container>
          <h1>Table</h1>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Good</th>
                <th>Median</th>
                <th>Bad</th>
              </tr>
            </thead>
            <tbody>
              {labels.map((label, index) => {
                return (
                  <tr key={index}>
                    <td>{label}</td>
                    <td>{formatCurrency(dataGood[index])}</td>
                    <td>{formatCurrency(dataMedian[index])}</td>
                    <td>{formatCurrency(dataBad[index])}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Container>
      )}
    </>
  )
}

export { Table }
