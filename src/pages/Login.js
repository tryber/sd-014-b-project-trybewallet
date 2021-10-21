import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            type="email"
            placeholder="insira seu e-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            placeholder="insira sua senha"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
