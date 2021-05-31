import React from 'react'
import { useInvestments } from '@/hooks'
import { Button } from '@/components/Button'

import { Container } from './styles'

const Error: React.FC = () => {
  const { handleReset } = useInvestments()
  return (
    <Container>
      <h1 data-cy="titleError">Uuups, there was probably a network problem :(</h1>
      <Button type="button" data-cy="btnReset" onClick={handleReset}>
        Let&apos;s try again
      </Button>
    </Container>
  )
}

export { Error }
