import reducer, { INITIAL_STATE } from '../details'
import {
  requestDetails,
  requestDetailsSuccess,
  requestDetailsFail
} from '../../actions/details'

describe('#details', () => {
  describe('#reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle FAIL', () => {
      const errorResponse = {
        error: 'Error - err',
        loading: false
      }

      expect(
        reducer([], requestDetailsFail('err'))
      ).toEqual(errorResponse)
    })

    it('should handle REQUEST', () => {
      const response = {
        error: '',
        loading: true
      }

      expect(
        reducer([], requestDetails())
      ).toEqual(response)
    })

    it('should handle SUCCESS', () => {
      const dataSent = {
        name: 'test',
        data: {
          abilities: [{ ability: { name: 'test' } }],
          sprites: {test: 'test'},
          stats: [{ stat: { name: 'test' }, base_stat: 100 }],
          types: [{ type: { name: 'test' } }]
        }
      }

      const successResponse = {
        error: '',
        list: {
          test: {
            abilities: ['test'],
            images: { test: 'test' },
            stats: [{ name: 'test', value: 100 }],
            types: ['test']
          }
        },
        loading: false
      }

      expect(
        reducer([], requestDetailsSuccess(dataSent))
      ).toEqual(successResponse)
    })
  })
})
