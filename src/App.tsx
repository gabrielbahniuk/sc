import React from 'react'
import Routes from './routes'
import { ConesProvider, InvestmentsProvider } from './hooks'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <InvestmentsProvider>
          <ConesProvider>
            <Routes />
          </ConesProvider>
        </InvestmentsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
