import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/carteira"
          component={ Wallet }
        />
        <Route
          path="/"
          component={ Login }
        />
      </Switch>
    );
  }
}

export default App;
