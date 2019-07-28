// @flow
import { ADD_URL } from '../actions';
import type { Action } from './types';

export default function urls(state: string[] = [], action: Action) {
  switch (action.type) {
    case ADD_URL:
      return state.concat(action);
    default:
      return state;
  }
}
