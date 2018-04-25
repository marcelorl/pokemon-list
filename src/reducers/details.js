import { handleActions } from 'redux-actions'

import {
  requestDetails,
  requestDetailsFail,
  requestDetailsSuccess
} from '../actions/details'

export const INITIAL_STATE = {}

const reducer = handleActions({
  [requestDetails]: (state, action) => ({
    error: '',
    loading: true
  }),
  [requestDetailsFail]: (state, action) => ({
    error: `Error - ${action.payload}`,
    loading: false
  }),
  [requestDetailsSuccess]: (state, action) => {
    const { abilities, sprites, stats, types } = action.payload.data

    const details = {
      abilities: abilities.map(item => item.ability.name),
      images: sprites,
      stats: stats.map(item => ({ name: item.stat.name, value: item.base_stat })),
      types: types.map(item => item.type.name)
    }
    const list = Object.assign({}, state.list, { [action.payload.name]: details })

    return {
      error: '',
      loading: false,
      list
    }
  }
}, INITIAL_STATE)

export default reducer
