import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
