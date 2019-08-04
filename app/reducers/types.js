import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type proxyStateType = {
  started: boolean,
  port: string,
  requests: string[]
};

export type Action = {
  type: string
};

export type GetState = () => proxyStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
