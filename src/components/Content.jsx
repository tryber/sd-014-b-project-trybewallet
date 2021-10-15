import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Content() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ (props) => <Login { ...props } /> }
      />
      <Route
        path="/carteira"
        render={ (props) => <Wallet { ...props } /> }
      />
    </Switch>
  );
}

export default Content;
