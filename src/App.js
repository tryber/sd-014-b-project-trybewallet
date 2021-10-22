import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './pages/Routes';
import store from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
