import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import pokemonsReducer from './pokemons'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  pokemons: pokemonsReducer
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
