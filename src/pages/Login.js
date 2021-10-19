import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form className="login">
          <h1>TrybeWallet</h1>
          <input data-testid="email-input" type="text" placeholder="Digite o seu e-mail" />
          <input data-testid="password-input" type="password" placeholder="Digite a sua senha" />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
