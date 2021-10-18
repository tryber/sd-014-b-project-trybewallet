import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/*" component={ NotFound } />
    </Switch>
  );
}

export default App;
