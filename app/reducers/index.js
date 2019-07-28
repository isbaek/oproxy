// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import urls from './urls';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    urls
  });
}
