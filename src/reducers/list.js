import get from 'lodash.get';

import {
  LIST_FAIL_FETCH,
  LIST_REQUEST_FETCH,
  LIST_SUCCESS_FETCH
} from '../actions/list';

const INITIAL_STATE = {
  loading: false,
  list: {
    count: 0,
    next: null,
    previous: '',
    results: []
  },
  error: ''
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_FAIL_FETCH:
      return Object.assign({}, state, {
        error: `Error - ${action.err}`,
        loading: false,
        list: []
      });
    case LIST_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: []
      });
    case LIST_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: get(action, 'list.data', INITIAL_STATE.list)
      });
    default:
      return state;
  }
};

export default listReducer;
