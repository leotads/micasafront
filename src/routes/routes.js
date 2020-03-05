import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute/index'
import Main from '../pages/Main'
import Login from '../pages/Login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes