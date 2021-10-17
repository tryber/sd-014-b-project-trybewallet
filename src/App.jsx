// todo: rever se precisa de exact
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Wallet from './pages/wallet/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
