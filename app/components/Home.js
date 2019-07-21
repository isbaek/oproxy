// @flow
import React, { Component } from 'react';
import styles from './Home.css';

import {open, close} from '../../proxy';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  onClick = () => {
    console.log('proxy open');
    open();
  };

  onClose = () => {
    console.log('proxy close');
    close()
  };

  render() {
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
