import reducer, { INITIAL_STATE } from '../pokemons'
import {
  requestPokemons,
  requestPokemonsSuccess,
  requestPokemonsFail
} from '../../actions/pokemons'

describe('#pokemons', () => {
  describe('#reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle FAIL', () => {
      const errorResponse = {
        error: 'Error - err',
        list: {},
        loading: false
      }

      expect(
        reducer([], requestPokemonsFail('err'))
      ).toEqual(errorResponse)
    })

    it('should handle REQUEST', () => {
      const response = {
        error: '',
        list: {},
        loading: true
      }

      expect(
        reducer([], requestPokemons())
      ).toEqual(response)
    })

    it('should handle SUCCESS', () => {
      const successResponse = {
        error: '',
        list: 'test',
        loading: false
      }

      expect(
        reducer([], requestPokemonsSuccess('test'))
      ).toEqual(successResponse)
    })
  })
})
