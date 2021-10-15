import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  validate() {
    const { email, password } = this.state;
    const magicNumber = 5;
    if ((password.length >= magicNumber) && (this.isEmailValid(email))) {
      this.setState({
        disabled: false,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
    this.validate();
  }

  render() {
    const { disabled, email, password } = this.state;
    return (
      <div>
        Login
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            id="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ disabled }>Entrar</button>
      </div>);
  }
}

export default Login;
