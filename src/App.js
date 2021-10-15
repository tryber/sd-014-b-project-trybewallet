import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Switch>
        <Route path="/" render={ () => <Login /> } />
      </Switch>
    </div>
  );
}

export default App;
