import Proxy from '../../proxy';
import { store } from '../store';

class ProxyHandler {
  constructor() {
    this.proxy = Proxy(this.callback);
    this.isRunning = false;
  }

  open(port = '8888') {
    this.proxy.listen(port, () => {
      this.isRunning = true;
      console.warn('OProxy listening ...');
    });
  }

  close() {
    this.proxy.shutdown(() => {
      this.isRunning = false;
      console.log('Everything is cleanly shutdown.');
    });
  }

  changePort(port = '8888') {
    if (this.isRunning) {
      this.proxy.close();
    }
    this.proxy.open(port);
  }

  callback = target => {
    store.dispatch({ type: 'ADD_REQUEST', request: target });
  };
}

export default new ProxyHandler();
