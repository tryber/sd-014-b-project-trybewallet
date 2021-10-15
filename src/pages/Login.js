import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="login">
          Login
          <input
            type="text"
            data-testid="email-input"
            name="login"
            id="login"
            placeholder="login"
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="text"
            data-testid="password-input"
            name="Senha"
            id="Senha"
            placeholder="Senha"
          />
        </label>
        <button type="button" onClick={ () => {} }>Entrar</button>
      </div>
    );
  }
}

export default Login;
