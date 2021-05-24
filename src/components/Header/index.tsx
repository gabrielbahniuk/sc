/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Logo from '@/assets/logo.svg'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}
export default Header
