import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  render() {
    const { email, password } = this.state;
    const minLength = 6;
    const disabled = password.length >= minLength && this.isEmailValid(email);
    return (
      <div>
        Login
        <input
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          name="password"
          onChange={ this.handleChange }
          data-testid="password-input"
          type="password"
        />
        <button
          type="button"
          disabled={ !disabled }
        >
          Entrar

        </button>
      </div>);
  }
}

export default Login;
