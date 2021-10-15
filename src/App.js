import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/wallet" component={ } /> */}
        <Route path="/" component={ Login } />
      </Switch>
      <div>Hello, TrybeWallet!</div>

    </>);
}

export default App;
