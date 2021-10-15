import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.handleDisabled());
  }

  handleDisabled() {
    const { email, password } = this.state;
    const PASSWORD_MINIMUM_CHARACTERS = 6;
    const checkEmail = email.includes('@');
    const emailAdd = email.includes('.com');

    if (password.length >= PASSWORD_MINIMUM_CHARACTERS && checkEmail && emailAdd) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, disabled } = this.state;
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
            onChange={ this.handleChange }
            name="password"
          />
        </label>
        <button
          id="btn-login"
          type="button"
          disabled={ disabled }
        >
          Entrar

        </button>
      </form>
    );
  }
}

export default Login;
