import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Content from './components/Content';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <Content />
        </Provider>
      </div>
    );
  }
}

export default App;
