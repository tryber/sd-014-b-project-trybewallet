import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </main>
    )
  }
}

export default App
