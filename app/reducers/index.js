// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { ADD_REQUEST, START_PROXY, END_PROXY, CHANGE_PORT } from '../actions';
import type { Action } from './types';

const initialState = {
  started: false,
  requests: [],
  port: 8888
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case START_PROXY: {
      return Object.assign({}, state, {
        started: true
      });
    }
    case END_PROXY: {
      return Object.assign({}, state, {
        started: false
      });
    }
    case CHANGE_PORT: {
      return Object.assign({}, state, {
        port: action.port
      });
    }
    case ADD_REQUEST:
      return Object.assign({}, state, {
        requests: [action.request, ...state.requests]
      });
    default:
      return state;
  }
}

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    proxyReducer: reducer
  });
}
