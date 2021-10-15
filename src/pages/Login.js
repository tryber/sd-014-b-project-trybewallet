import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form className="login-form">
        <input placeholder="Email" type="email" data-testid="email-input" />
        <input placeholder="Password" type="password" data-testid="password-input" />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
