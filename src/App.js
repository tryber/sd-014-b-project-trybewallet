import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
