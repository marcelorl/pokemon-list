import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { makeMainRoutes } from './routes'
import store from './reducers'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const routes = makeMainRoutes()

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
