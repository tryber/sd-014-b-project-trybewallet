import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Wallet } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
