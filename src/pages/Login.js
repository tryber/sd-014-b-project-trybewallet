import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
        />
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
