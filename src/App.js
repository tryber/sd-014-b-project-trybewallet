import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={ () => <Login /> } />
        </Switch>
      </div>
    );
  }
}
