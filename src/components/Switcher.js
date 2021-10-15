import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Switcher extends Component {
  render() {
    return (
      <Switch>
        <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      </Switch>
    );
  }
}

export default Switcher;
