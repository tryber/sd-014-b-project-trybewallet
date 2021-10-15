import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <h2>Login</h2>
        <input data-testid="email-input" type="text" required />
        <input data-testid="password-input" type="password" minLength="6" required />
        <button type="button"  >Entrar</button>
      </>
    );
  }
}

export default Login;
