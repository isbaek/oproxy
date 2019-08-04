// @flow
import React, { Component } from 'react';
import Header from '../components/Header';
import RequestList from '../components/RequestList';

import proxyhandler from '../../proxy';

type Props = {};

const TEST = [{
  url: 'http://www.google.ca',
  success: true,
},
{
  url: 'http://www.google.ca',
  success: true,
},
{
  url: 'http://www.google.ca',
  success: true,
},
{
  url: 'http://www.google.ca',
  success: true,
}]

export default class Home extends Component<Props> {
  props: Props;

  onClick = () => {
    proxyhandler.open();
  }

  onClose = () => {
    proxyhandler.close();
  }

  componentWillUnmount () {
    if (proxyhandler.isRunning) {
      this.onClose();
    }
  }

  render() {
    console.log('this props', proxyhandler)
    return (
      <div>
        <Header onClick={this.onClick} isListening={proxyhandler.isRunning} />
        <RequestList requests={this.props.requests} />
      </div>
    );
  }
}
