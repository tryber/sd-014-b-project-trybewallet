import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <nav>
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
      </nav>
    );
  }
}

export default Login;
