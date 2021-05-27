import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInvestments, useCones } from '@/hooks'
import { Error } from '@/pages/Error'
import { Chart } from '@/components/Chart'
import { Table } from '@/components/Table'
import { Button } from '@/components/Button'
import { BarLoader } from 'react-spinners'

import { ButtonSection, Container } from './styles'

const Result: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { handleReset, initialInvestment, amountInvestmentYears, riskLevel } = useInvestments()
  const { cones, hasError } = useCones()
  function handleToggleTable(): void {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <>
      {hasError ? (
        <Error />
      ) : cones.length === 0 ? (
        <Container data-cy="loadingComponent">
          <BarLoader height={5} width="80%" loading={cones.length === 0} color="#28EBCF" />
        </Container>
      ) : (
        <Container data-cy="resultContainer" data-testid="resultContainer">
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
