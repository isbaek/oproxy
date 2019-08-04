import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type requestStateType = {
  requests: string[]
};

export type Action = {
  type: string
};

export type GetState = () => requestStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
