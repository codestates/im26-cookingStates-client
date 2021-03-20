import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';

import App from './App';

import './index.css';

ReactDOM.render(
  /* 로그아웃 상태 */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
