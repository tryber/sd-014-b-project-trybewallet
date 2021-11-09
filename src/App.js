import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

// referência código https://github.com/tryber/sd-014-b-project-trybewallet/blob/arianeueti-project-trybewallet/src/pages/Login.js

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
