import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <label htmlFor="email-input">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="text"
            placeholder="Digite sua senha"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </main>
    );
  }
}

export default Login;
