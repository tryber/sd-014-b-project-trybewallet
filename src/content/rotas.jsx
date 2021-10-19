import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';

class Rotas extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={ Login } />
      </div>
    );
  }
}

export default Rotas;
