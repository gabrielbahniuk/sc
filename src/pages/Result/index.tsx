import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInvestments } from '@/hooks'
import { api } from '@/services/api'
import { Error } from '@/pages/Error'
import { Chart } from '@/components/Chart'
import { Table } from '@/components/Table'
import { Button } from '@/components/Button'

import { ButtonSection, Container } from './styles'

type Cone = {
  riskLevel: number
  mu: number
  sigma: number
}

const Result: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cones, setCones] = useState<Cone[]>([])
  const [hasError, setHasError] = useState(false)
  const { handleReset, initialInvestment, amountInvestmentYears, riskLevel } = useInvestments()

  function handleToggleTable(): void {
    setIsVisible((prevState) => !prevState)
  }

  function loadData(): void {
    api
      .get('/api/cones')
      .then(({ data }) => setCones(data))
      .catch(() => setHasError(true))
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      {hasError || cones.length < 1 ? (
        <Error />
      ) : (
        <Container data-testid="resultContainer">
          <h1 data-cy="titleResult">Result</h1>
          <Chart
            cones={cones}
            yearsInvestment={amountInvestmentYears}
            investmentValue={initialInvestment}
            riskLevel={riskLevel}
          />

          <ButtonSection>
            <Button data-cy="btnToggleTable" onClick={handleToggleTable}>
              {isVisible ? 'Hide ' : 'Show'}Table
            </Button>
            <Link to="/">
              <Button data-cy="btnReset" onClick={handleReset} restart="true">
                Restart
              </Button>
            </Link>
          </ButtonSection>

          <Table
            isVisible={isVisible}
            cones={cones}
            riskLevel={riskLevel}
            yearsInvestment={amountInvestmentYears}
            investmentValue={initialInvestment}
          />
        </Container>
      )}
    </>
  )
}

export { Result }
