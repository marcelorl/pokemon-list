import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import listReducer from './list'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  list: listReducer
})

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)

const configureStore =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares
    )
  )

export default configureStore
