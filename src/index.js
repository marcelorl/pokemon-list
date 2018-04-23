import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import { makeMainRoutes } from './routes'
import store from './reducers'

import 'bootstrap/dist/css/bootstrap.css'

injectGlobal`
  html,
  body,
  #root {
    height: 100%;
    width: 100vw;
    overflow-x: hidden;
  }
  
  label, hr {
    margin: 0;
  }
`

const routes = makeMainRoutes()

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
