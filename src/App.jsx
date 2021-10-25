import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exat path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
