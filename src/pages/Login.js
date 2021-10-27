import React from 'react';

class Login extends React.Component {
  render() {
    return (
    <div className="login-field">
      Login
      <input type="text" data-testid="email-input" placeholder="email" />
      <input type="text" data-testid="password-input" placeholder="password" />
      <button type="button">Entrar</button>
    </div>);
  }
}

export default Login;
