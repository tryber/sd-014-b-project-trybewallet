import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    );
  }
}

export default App;
