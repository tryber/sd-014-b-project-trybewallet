import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
        />
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
