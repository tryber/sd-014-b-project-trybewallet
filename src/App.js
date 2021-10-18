import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Route exact path="/" component={ Login } />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
