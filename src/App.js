import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Wallet from './Pages/Wallet';

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
