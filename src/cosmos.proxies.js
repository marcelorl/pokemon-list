import createReduxProxy from 'react-cosmos-redux-proxy'
import createRouterProxy from 'react-cosmos-router-proxy'

import configureStore from './reducers'

const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
})

export default [
  createRouterProxy(),
  ReduxProxy
]
