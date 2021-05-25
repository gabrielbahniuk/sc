import React from 'react'
import { Form } from '@/components/Form'

import { Container } from './styles'

const InitialInvestment: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Investments Calculator</h1>
        <Form />
      </Container>
    </>
  )
}

export { InitialInvestment }
