// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const ADD_URL = 'ADD_URL';

export function addURL(url) {
  return {
    type: ADD_URL,
    url
  };
}