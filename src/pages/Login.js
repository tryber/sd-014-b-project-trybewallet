import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            id="input-email"
            name="email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="input-password">
          Password:
          <input
            id="input-password"
            name="password"
            type="password"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
