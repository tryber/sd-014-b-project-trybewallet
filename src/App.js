import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    </main>
  );
}

export default App;
