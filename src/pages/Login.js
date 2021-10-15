import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <form>
        <label htmlFor="email-login-input">
          Email
          <input
            type="email"
            id="email-login-input"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        Password
        <label htmlFor="password-login-input">
          <input
            type="password"
            id="password-login-input"
            data-testid="password-input"
          />
        </label>
        <button id="btn-login" type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
