import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/carteira" />
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
