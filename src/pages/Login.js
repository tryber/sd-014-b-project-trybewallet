import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="text" id="password" data-testid="password-input" />
        </label>

        <button type="button"> Entrar </button>
      </div>
    );
  }
}

export default Login;
