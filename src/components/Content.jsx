import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';

function Content() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ (props) => <Login { ...props } /> }
      />
    </Switch>
  );
}

export default Content;
