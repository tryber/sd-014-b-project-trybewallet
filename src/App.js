import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Login }/>
          <Route path="/wallet" component={ Wallet }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
