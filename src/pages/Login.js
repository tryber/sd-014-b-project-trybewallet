import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="e-mail"
          placeholder="E-mail"
        />
        <input
          type="password"
          data-testid="password-input"
          name="senha"
          placeholder="Senha"
        />
        <input
          type="button"
          name="entrar"
          value="Entrar"
        />
      </form>
    );
  }
}

export default Login;
