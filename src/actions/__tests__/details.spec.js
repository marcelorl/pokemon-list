import configureMockStore from '../../services/ConfigureMockStore/configureMockStore'
import {
  requestDetailsFail,
  requestDetails,
  requestDetailsSuccess,
  fetchDetails
} from '../details'

describe('#details', () => {
  describe('#actions', () => {
    it('should request details', () => {
      const expectedAction = {
        type: 'DETAILS_REQUEST_FETCH'
      }

      expect(requestDetails()).toEqual(expectedAction)
    })

    it('should request details success', () => {
      const payload = {
        test: '123'
      }

      const expectedAction = {
        type: 'DETAILS_SUCCESS_FETCH',
        payload
      }

      expect(requestDetailsSuccess(payload)).toEqual(expectedAction)
    })

    it('should request details success', () => {
      const err = new TypeError('error')

      const expectedAction = {
        type: 'DETAILS_FAIL_FETCH',
        payload: err,
        error: true
      }

      expect(requestDetailsFail(err)).toEqual(expectedAction)
    })
  })

  describe('#requests', () => {
    let store

    beforeEach(() => {
      store = configureMockStore({})
    })

    describe('#fetchDetails', () => {
      const name = 'name'
      const url = 'url'
      const response = {
        data: 'response'
      }
      const error = 'error'

      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(response))
          .mockImplementationOnce(() => Promise.reject(error))
      }

      it('should fetchProduct success', async () => {
        const expectedActions = [
          { type: 'DETAILS_REQUEST_FETCH' },
          { type: 'DETAILS_SUCCESS_FETCH', payload: { name, data: response.data } }
        ]

        await store.dispatch(fetchDetails(name, url, { axios }))

        expect(store.getActions()).toEqual(expectedActions)
        expect(axios.get).toBeCalledWith(url)
      })

      it('should fetchProduct fail', async () => {
        const expectedActions = [
          { type: 'DETAILS_REQUEST_FETCH' },
          { type: 'DETAILS_FAIL_FETCH' }
        ]

        await store.dispatch(fetchDetails(name, url, { axios }))

        expect(store.getActions()).toEqual(expectedActions)
        expect(axios.get).toBeCalledWith(url)
      })
    })
  })
})
