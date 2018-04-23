import { handleActions } from 'redux-actions'

import {
  requestPokemons,
  requestPokemonsFail,
  requestPokemonsSuccess
} from '../actions/pokemons'

const INITIAL_STATE = {
  loading: true,
  list: {
    count: 0,
    next: null,
    previous: '',
    results: []
  },
  error: ''
}

const reducer = handleActions({
  [requestPokemons]: (state, action) => ({
    error: '',
    loading: true,
    list: {}
  }),
  [requestPokemonsFail]: (state, action) => ({
    error: `Error - ${action.err}`,
    loading: false,
    list: {}
  }),
  [requestPokemonsSuccess]: (state, action) => ({
    error: '',
    loading: false,
    list: action.payload
  })
}, INITIAL_STATE)

export default reducer
