import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wallet from './pages/Wallet';
import login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
