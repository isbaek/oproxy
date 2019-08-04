// @flow
import React, { Component } from 'react';
import Header from '../components/Header';
import RequestList from '../components/RequestList';

import proxyHandler from '../../proxy';

type Props = {
  requests: object[],
  started: boolean,
  port: number
};

export default class Main extends Component<Props> {
  props: Props;

  componentWillUnmount() {
    const { started } = this.props;
    if (started) {
      this.onClose();
    }
  }

  onStart = () => {
    proxyHandler.open();
  };

  onClose = () => {
    proxyHandler.close();
  };

  onButtonClick = () => {
    const { started } = this.props;
    if (started) {
      this.onClose();
    } else {
      this.onStart();
    }
  };

  render() {
    const { requests, started, port } = this.props;
    return (
      <div>
        <Header onClick={this.onButtonClick} isListening={started} port={port} />
        {requests.length > 0 && <RequestList requests={requests} />}
      </div>
    );
  }
}
