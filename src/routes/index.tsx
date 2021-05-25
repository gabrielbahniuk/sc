/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { InitialInvestment } from '@/pages/InitialInvestment'
import { Result } from '@/pages/Result'
import { Header } from '@/components/Header'

const Routes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={InitialInvestment} />
        <Route exact path="/result" component={Result} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  )
}

export default Routes
