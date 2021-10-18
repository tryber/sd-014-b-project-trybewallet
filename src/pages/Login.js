import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              placeholder="Email"
              type="email"
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              placeholder="Senha"
              type="password"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
