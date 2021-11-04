import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />

    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
