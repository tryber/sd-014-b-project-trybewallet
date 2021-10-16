import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Content from './pages/Content';
import store from './store/index';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Content />
      </Provider>
    </BrowserRouter>

  );
}

export default App;
