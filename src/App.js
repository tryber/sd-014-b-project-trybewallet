import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Route path="/" component={ Login } />
      </main>
    );
  }
}

export default App;
