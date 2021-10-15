// Requisito 1: apontamento de rotas para / e carteira
// Requisito 4: exact path no /carteira.

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>);
}

export default App;
