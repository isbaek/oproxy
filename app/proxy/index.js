import Proxy from '../../proxy';
import { store } from '../store';

class ProxyHandler {
  constructor() {
    this.proxy = Proxy(this.callback);
    this.port = store.getState().proxyReducer.port;
    this.isRunning = false;
    console.log('access store');
  }

  open() {
    this.proxy.listen(this.port, () => {
      this.isRunning = true;
      store.dispatch({ type: 'START_PROXY' });
      console.warn('OProxy listening ...');
    });
  }

  close() {
    this.proxy.shutdown(() => {
      this.isRunning = false;
      store.dispatch({ type: 'END_PROXY' });
      console.log('Everything is cleanly shutdown.');
    });
  }

  changePort(port = '8888') {
    if (this.isRunning) {
      this.proxy.close();
    }
    store.dispatch({ type: 'CHANGE_PORT', port });
  }

  callback = target => {
    store.dispatch({ type: 'ADD_REQUEST', request: target });
  };
}

export default new ProxyHandler();
