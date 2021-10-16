import React from 'react';

/*
const INITIAL_STATE = {
  user = {
    email: '',
  },
  wallet = {
    valor: 0,
    moeda: '',
    metodoDePagamento: '',
    tag: '',
    descricao: '',
  },
}

guardar email e coloca-lo no header

*/

class Login extends React.Component {
  render() {
    return (
      <div>

        <label htmlFor="email">
          Email:
          <input id="email" data-testid="email-input" />
        </label>

        <label htmlFor="senha">
          Senha:
          <input id="senha" data-testid="password-input" />
        </label>

        <button
          type="button"
        >
          Entrar
        </button>

      </div>

    );
  }
}

export default Login;
