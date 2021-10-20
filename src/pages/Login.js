import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <form>
          <input name="email" data-testid="email-input" />
          <input name="password" data-testid="password-input" />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
