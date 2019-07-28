import Proxy from '../../proxy';
import { store, history } from '../store';

class ProxyHandler {
  constructor() {
    this.proxy = Proxy(this.callback)
  }

  open () {
    this.proxy.listen(8888, () => {
      console.warn('OProxy listening ...');
    });
  }

  close () {
    this.proxy.shutdown(() => {
      console.log('Everything is cleanly shutdown.');
    });
  }

  callback = (target) => {
    store.dispatch({type: 'ADD_URL', url: target})
  }
}

export default new ProxyHandler();