import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          E-mail:
          <input
            name="password"
            type="text"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
