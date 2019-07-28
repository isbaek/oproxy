// @flow
import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const selectedConfigureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

const store = selectedConfigureStore.configureStore();
const history = selectedConfigureStore.history;

export {
  store,
  history
}
