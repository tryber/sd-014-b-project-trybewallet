import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ isLogged: true });
  }

  render() {
    const { isLogged } = this.state;
    return (
      <Switch>
        <Route path="/" exact>
          { isLogged
            ? <Redirect to="/carteira" />
            : <Login handleLogin={ this.handleLogin } /> }
        </Route>
        <Route path="/carteira">
          <Wallet />
        </Route>
      </Switch>
    );
  }
}

export default App;
