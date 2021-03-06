import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import App from './components/pages/App'
import Home from './components/pages/Home'
import Pokemon from './components/pages/Pokemon'
const history = createHistory()

const AppRoute = ({ component: Component, ...rest }) =>
  <Route {...rest} render={props => (
    <App>
      <Component {...props} />
    </App>
  )} />

export const makeMainRoutes = () =>
  <HashRouter>
    <ConnectedRouter history={history}>
      <div>
        <AppRoute exact path='/' component={Home} />
        <AppRoute exact path='/:pokemon' component={Pokemon} />
      </div>
    </ConnectedRouter>
  </HashRouter>
