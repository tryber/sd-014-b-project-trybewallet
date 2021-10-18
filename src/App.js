import React from 'react';
import { Route, Switch } from 'react-router';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Switch>
        <Route path="/carteira" render={ () => <Wallet /> } />
        <Route path="/" render={ (props) => <Login { ...props } /> } />
      </Switch>
    </div>
  );
}

export default App;
