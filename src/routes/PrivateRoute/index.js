import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from '../../utils/localStore'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => {
        return localStorage.getItem("micasa@authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location}
            }}
          />
        )
      }
    }
  />
)