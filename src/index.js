import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/Pages/App'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import store from './reducers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
