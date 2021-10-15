import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  const history = createMemoryHistory();
  return (
    <BrowserRouter>
      <Switch>
        <Route history={ history } exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
