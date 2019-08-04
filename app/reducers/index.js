// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import requests from './requests';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    requests
  });
}
