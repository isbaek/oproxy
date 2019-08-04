// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types';

import App from './containers/App';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
