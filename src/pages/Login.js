import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <form>
        <label htmlFor="email-input">
          E-mail
          <input
            data-testid="email-input"
            name="emailInput"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            data-testid="password-input"
            name="passwordInput"
            type="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
