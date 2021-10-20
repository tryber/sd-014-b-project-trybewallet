import React, {Component} from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          data-testid="password-input"
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}
export default Login;
