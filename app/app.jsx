import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './utils/history';
import 'sanitize.css';

import App from './containers/App';

import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    MOUNT_NODE,
  );
};

render();
