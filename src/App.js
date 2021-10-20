import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <header>
        <h1>Hello, TrybeWallet!</h1>
      </header>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exat path="/" component={ Login } />
      </Switch>
    </>
  );
}

export default App;
