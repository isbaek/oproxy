// @flow
import React, { Component } from 'react';
import {RequestType} from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RequestList from '../components/RequestList';
import styles from './Main.css';

import proxyHandler from '../../proxy';

type Props = {
  requests: RequestType[],
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

  onPortChange = (port) => {
   const { changePort } = this.props;
   changePort(port)
  }

  render() {
    const { requests, started, port } = this.props;
    return (
      <div className={styles.container}>
        <Header 
          onClick={this.onButtonClick} 
          isListening={started} 
          onPortChange={this.onPortChange}
          port={port} 
        />
          <div className={styles.requests}>
            <RequestList requests={requests} />
          </div>
        <Footer isListening={started}  port={port} />
      </div>
    );
  }
}
