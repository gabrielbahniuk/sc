import React from 'react'

import { Container } from './styles'

type ButtonProps = {
  children?: React.ReactNode
  onClick?: any
  rest?: any
  [x: string]: any
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  return (
    <Container onClick={onClick} {...rest}>
      {children}
    </Container>
  )
}

export { Button }
