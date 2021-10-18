import React, { Component } from 'react';
import { Route } from 'react-router';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Content extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </div>
    );
  }
}

export default Content;
