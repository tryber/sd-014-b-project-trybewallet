import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Wallet from './Pages/Wallet';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </main>
  );
}

export default App;
