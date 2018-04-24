import { createAction } from 'redux-actions'

import {
  fetchDetails
} from './details'
import axios from '../services/Request'

const dependencies = { axios }

export const requestPokemonsFail = createAction('POKEMONS_FAIL_FETCH')
export const requestPokemons = createAction('POKEMONS_REQUEST_FETCH')
export const requestPokemonsSuccess = createAction('POKEMONS_SUCCESS_FETCH')

export const fetchPokemons = (url = '', injection) => {
  const { axios } = Object.assign({}, dependencies, injection)

  return dispatch => {
    dispatch(requestPokemons())
    return axios.get(url)
      .then(({ data }) => {
        data.results.forEach(({ name, url }) =>
          dispatch(fetchDetails(name, url))
        )

        dispatch(requestPokemonsSuccess(data))
      })
      .catch(({ data }) => dispatch(requestPokemonsFail(data)))
  }
}
