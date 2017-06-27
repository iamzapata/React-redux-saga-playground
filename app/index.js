import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Application from 'components/Application';
import configureStore from './store/configureStore';

const store = configureStore();

const container = document.getElementById('app');

import rootSaga from './sagas';

store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  container
);
