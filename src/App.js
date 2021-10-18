import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/carteira">
          <Wallet />
        </Route>
      </Switch>
    );
  }
}

export default App;
