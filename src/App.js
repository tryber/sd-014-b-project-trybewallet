import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
export default App;

/* parte do requisito 1, fazer as rotas:
importar o react e o component,
transformar o componente de função em componente de classe,
aplicar o switch, dentro dele o route que são as rotas,
para a "home" / renderizando o componente login,
para carteira o comp. wallet
*/
