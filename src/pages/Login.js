import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input data-testid="email-input" placeholder="Email" type="email" />
        <input data-testid="password-input" placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}
export default Login;
