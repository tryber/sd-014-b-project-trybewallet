import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

function Switcher() {
  return (
    <Switch>
      <Route exact to="/" component={ Login } />
    </Switch>
  );
}

export default Switcher;
