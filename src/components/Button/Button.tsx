import React from 'react'

import { Container } from './styles'

type ButtonProps = {
  onClick?: () => void
  type: string
  restart?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, ...rest } = props
  return (
    <Container onClick={onClick} {...rest}>
      {children}
    </Container>
  )
}

export { Button }
