import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input type="email" placeholder="Digite seu Email" data-testid="email-input" />
        <input
          type="password"
          placeholder="Digite sua Senha"
          data-testid="password-input"
        />
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
