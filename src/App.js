import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Carteira from './pages/Carteira';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Carteira } />
    </Switch>
  );
}

export default App;
