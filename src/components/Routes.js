import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/carteira">
          <Wallet />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
