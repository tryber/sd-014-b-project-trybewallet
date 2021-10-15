import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input
          type="email"
          name="email"
          placeholder="Digite seu Email"
          data-testid="email-input"

        />
        <input
          type="password"
          name="senha"
          placeholder="Digite sua Senha"
          data-testid="password-input"
        />

        <button type="button">Entrar</button>

      </section>
    );
  }
}

export default Login;
