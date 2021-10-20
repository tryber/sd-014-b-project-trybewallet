import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
