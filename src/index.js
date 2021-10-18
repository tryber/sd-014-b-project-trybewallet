import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
