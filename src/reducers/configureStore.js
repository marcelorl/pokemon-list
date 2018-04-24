import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import history from '../services/History'
import detailsReducer from './details'
import pokemonsReducer from './pokemons'

const loggerMiddleware = createLogger()
const routerHistoryMiddleware = routerMiddleware(history)

const reducers = combineReducers({
  routing: routerReducer,
  details: detailsReducer,
  pokemons: pokemonsReducer
})

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  routerHistoryMiddleware
)

const configureStore =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares
    )
  )

export default configureStore
