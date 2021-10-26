import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
