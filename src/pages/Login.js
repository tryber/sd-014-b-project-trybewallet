import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="inputEmail">
          Email:
          <input data-testid="email-input" name="inputEmail" type="text" />
        </label>
        <label htmlFor="inputPassword">
          Password:
          <input data-testid="password-input" name="inputPassword" type="password" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
