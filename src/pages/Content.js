import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Wallet from './Wallet';

class Content extends React.Component {
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
