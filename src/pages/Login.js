import React from 'react';
import '../App.css';
import { Container } from '@material-ui/core';

class Login extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <div>
          <h2>Login</h2>
          <label htmlFor="input-email">
            Email:
            <input
              data-testid="email-input"
              id="input-email"
              name="email"
              type="text"
            />
          </label>
          <label htmlFor="input-password">
            senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="input-password"
            />
          </label>
          <button type="button">Entrar</button>
        </div>
      </Container>
    );
  }
}

export default Login;
