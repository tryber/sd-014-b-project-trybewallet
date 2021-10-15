import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input data-testid="email-input" type="email" placeholder="E-mail" />
        <input data-testid="password-input" type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
