import { createAction } from 'redux-actions'

import axios from '../services/Request'

const dependencies = { axios }

export const requestDetailsFail = createAction('DETAILS_FAIL_FETCH')
export const requestDetails = createAction('DETAILS_REQUEST_FETCH')
export const requestDetailsSuccess = createAction('DETAILS_SUCCESS_FETCH')

export const fetchDetails = (name, url, injection) => {
  const { axios } = Object.assign({}, dependencies, injection)

  return dispatch => {
    dispatch(requestDetails())
    return axios.get(url)
      .then(({ data }) => dispatch(requestDetailsSuccess({ name, data })))
      .catch(({ data }) => dispatch(requestDetailsFail(data)))
  }
}
