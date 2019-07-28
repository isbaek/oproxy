// @flow
import React, { Component } from 'react';
import styles from './Home.css';

import proxyhandler from '../../proxy';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  onClick = () => {
    proxyhandler.open();
  }

  onClose = () => {
    proxyhandler.close();
  }

  render() {
    console.log('props', this.props)
    return (
      <div className={styles.container}>
        <p>O Proxy</p>
        <button type="button" onClick={this.onClick}>
          Click me
        </button>
        <button type="button" onClick={this.onClose}>
         CLOSE
      </button>
      </div>
    );
  }
}
