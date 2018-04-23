import { handleActions } from 'redux-actions'

import {
  requestDetails,
  requestDetailsFail,
  requestDetailsSuccess
} from '../actions/details'

const INITIAL_STATE = {}

const reducer = handleActions({
  [requestDetails]: (state, action) => ({
    error: '',
    loading: true
  }),
  [requestDetailsFail]: (state, action) => ({
    error: `Error - ${action.err}`,
    loading: false
  }),
  [requestDetailsSuccess]: (state, action) => {
    const list = Object.assign({}, state.list, { [action.payload.name]: action.payload.data.sprites })

    return {
      error: '',
      loading: false,
      list
    }
  }
}, INITIAL_STATE)

export default reducer
