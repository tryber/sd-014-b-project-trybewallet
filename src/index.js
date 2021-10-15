import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './pages/Login.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <Header />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// LOG DE ALTERAÇÕES:

// Alteração 1 - Mudei o App.js para componente de classe, para poder
// manejar estado sem hooks e etc

// Alteração 2 - Criei o básico da página de Login e coloquei ela no
// na rota / dentro do App.js

// As alterações 1 e 2 completam, em teoria, o requisito 1

// Alteração 3 - Atendendo o requisito 2 em pages/Login.js
// Dúvida: Por que os ternários dentro de verifyLoginConditions
// tem que estar dentro de () e não {}? Deu erro até eu mudar isso

// Até aqui, no browser funciona. Os testes não passam, dão o erro:
// Expected the reducer to be a function.

// Alteração 4 - CSS (bem mais ou menos) no index e na Header só pra
// ficar mais visual

// Alteração 5 - Requisito 3. Criei a store, o reducer user.js, adicionei
// o path da wallet, criei o rootreducer, e o estado de email salvo em login.

// Alteração 6 - Requisito 4 já pronto. Era só criar uma wallet.js.

// Alteração 7 - Requisito 5 feito: Criei a WalletHeader e fiz a comunicação com
// Wallet e a store

// Alteração 8 - Requisito 6. Basicamente importação e criação do form

// Alteração 9 - Pulei o requisito 7 e fui para o 8.