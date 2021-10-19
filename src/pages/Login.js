import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Password"
          />
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
