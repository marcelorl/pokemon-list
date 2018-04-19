import axios from '../services/Request';

export const LIST_FAIL_FETCH = 'LIST_FAIL_FETCH';
export const LIST_REQUEST_FETCH = 'LIST_REQUEST_FETCH';
export const LIST_SUCCESS_FETCH = 'LIST_SUCCESS_FETCH';

const dependencies = { axios };

export const requestListFail = err =>
  ({
    type: LIST_FAIL_FETCH,
    err
  });

export const requestList = () =>
  ({
    type: LIST_REQUEST_FETCH
  });

export const requestListSuccess = list =>
  ({
    type: LIST_SUCCESS_FETCH,
    list
  });

export const fetchList = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestList());
    return axios.get('/list')
      .then(list => dispatch(requestListSuccess(list)))
      .catch(err => dispatch(requestListFail(err)));
  };
};
