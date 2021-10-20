import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="emailInput"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="password"
              name="passwordInput"
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
