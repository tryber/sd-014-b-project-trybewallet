import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
        <Link to="/wallet">
          <button
            type="button"
          >
            Entrar
          </button>
        </Link>
      </section>);
  }
}

export default Login;
