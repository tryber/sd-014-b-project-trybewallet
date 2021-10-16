import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="text"
              data-testid="email-input"
              name="email"
              defaultValue="email"
            />
          </label>
          <label htmlFor="pasword">
            <input
              type="pasword"
              data-testid="password-input"
              name="pasword"
              defaultValue="password"
            />
          </label>
        </form>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
