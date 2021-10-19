import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>

    );
  }
}

export default Content;
