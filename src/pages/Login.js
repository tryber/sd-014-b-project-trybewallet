import React from 'react';

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
