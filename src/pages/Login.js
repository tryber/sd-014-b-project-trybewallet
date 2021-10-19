import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="inputEmail">
            <input
              data-testid="email-input"
              type="text"
              id="inputEmail"
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="inputPassword">
            <input
              data-testid="password-input"
              type="password"
              id="inputPassword"
              placeholder="Senha"
            />
          </label>
          <button type="button">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
