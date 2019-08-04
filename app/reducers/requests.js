// @flow
import { ADD_REQUEST } from '../actions';
import type { Action } from './types';

export default function reducer(state: string[] = [], action: Action) {
  switch (action.type) {
    case ADD_REQUEST:
      return [action.request, ...state];
    default:
      return state;
  }
}
