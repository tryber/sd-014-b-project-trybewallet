import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="email">
              <input data-testid="email-input" name="email" />
            </label>

            <label htmlFor="password">
              <input data-testid="password-input" name="password" type="password" />
            </label>

            <button type="submit">Entrar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
