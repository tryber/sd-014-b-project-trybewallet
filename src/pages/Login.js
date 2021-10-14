// Requisito 1: criação do campo de login
import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            <input
              type="text"
              placeholder="Email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="input-password">
            <input
              type="password"
              placeholder="Senha"
              data-testid="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
