import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <section>
        <div>Hello, TrybeWallet!</div>
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </section>
    );
  }
}

export default App;
