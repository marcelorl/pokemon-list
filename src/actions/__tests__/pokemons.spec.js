import configureMockStore from '../../services/ConfigureMockStore'
import {
  requestPokemons,
  requestPokemonsFail,
  requestPokemonsSuccess,
  fetchPokemons
} from '../pokemons'

describe('#pokemons', () => {
  describe('#actions', () => {
    it('should request details', () => {
      const expectedAction = {
        type: 'POKEMONS_REQUEST_FETCH'
      }

      expect(requestPokemons()).toEqual(expectedAction)
    })

    it('should request details success', () => {
      const payload = {
        test: '123'
      }

      const expectedAction = {
        type: 'POKEMONS_SUCCESS_FETCH',
        payload
      }

      expect(requestPokemonsSuccess(payload)).toEqual(expectedAction)
    })

    it('should request details success', () => {
      const err = new TypeError('error')

      const expectedAction = {
        type: 'POKEMONS_FAIL_FETCH',
        payload: err,
        error: true
      }

      expect(requestPokemonsFail(err)).toEqual(expectedAction)
    })
  })

  describe('#requests', () => {
    let store

    beforeEach(() => {
      store = configureMockStore({})
    })

    describe('#fetchPokemons', () => {
      const error = 'error'

      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.reject(error))
      }

      it('should fetchPokemons fail', async () => {
        const expectedActions = [
          { type: 'POKEMONS_REQUEST_FETCH' },
          { type: 'POKEMONS_FAIL_FETCH' }
        ]

        await store.dispatch(fetchPokemons({ axios }))

        expect(store.getActions()).toEqual(expectedActions)
        expect(axios.get).toBeCalledWith('')
      })
    })
  })
})
