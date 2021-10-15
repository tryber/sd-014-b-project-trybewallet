import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="mail">
          <input data-testid="email-input" name="mail" type="text" />
        </label>
        <label htmlFor="password">
          <input data-testid="password-input" name="password" type="password" />
        </label>
        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
