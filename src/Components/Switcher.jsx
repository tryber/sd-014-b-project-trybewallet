import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Switcher extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route path="/carteira" render={ () => <Wallet /> } />
      </Switch>
    );
  }
}

export default Switcher;
