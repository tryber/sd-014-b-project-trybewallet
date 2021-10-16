import React from 'react';
import '../style/Login.css';

class Login extends React.Component {
  render() {
    return (
      <main id="container">
        <form>
          <h2>Trybe Wallet</h2>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              data-testid="email-input"
            />
            <div className="underline" />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              data-testid="password-input"
            />
            <div className="underline" />
          </div>
          <input type="button" value="Entrar" />
        </form>
      </main>
    );
  }
}

export default Login;
