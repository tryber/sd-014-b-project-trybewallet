import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
