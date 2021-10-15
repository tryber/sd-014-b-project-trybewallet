import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <h1>Login</h1>
        <label htmlFor="email-input">
          E-mail:
          <input
            type="email"
            id="email-input"
            placeholder="Digite seu e-mail"
            name="email-input"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            id="password-input"
            placeholder="Digite sua senha"
            name="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
