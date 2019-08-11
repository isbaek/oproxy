// @flow
export const ADD_REQUEST = 'ADD_REQUEST';
export const START_PROXY = 'START_PROXY';
export const END_PROXY = 'END_PROXY';
export const CHANGE_PORT = 'CHANGE_PORT';

export function addRequest(request: {}) {
  return {
    type: ADD_REQUEST,
    request
  };
}

export function startProxy() {
  return {
    type: START_PROXY
  };
}

export function endProxy() {
  return {
    type: END_PROXY
  };
}

export function changePort(port: number) {
  return {
    type: CHANGE_PORT,
    port
  };
}
