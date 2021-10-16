import React from 'react';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './store/index';

function App() {
  return (
    <Provider store={ store }>
      <main>
        <Routes />
      </main>
    </Provider>
  );
}

export default App;
