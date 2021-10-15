import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ <Login /> } />
          <Route path="/carteira" component={ <Wallet /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
