import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input data-testid="email-input" type="email" placeholder="Email" />
        <input data-testid="password-input" type="password" placeholder="Password" />
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
