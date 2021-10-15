import React, { Component } from 'react';

class Login extends Component {
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
    this.setState(
      { [name]: value },
    );
  }

  // Ajuda do Michael Caxias para fazer o regex
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  render() {
    const { email, password } = this.state;
    const num = 6;
    const disabled = password.length >= num && this.isEmailValid(email);
    return (
      <form>
        <input
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
          name="email"
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          name="password"
        />
        <button
          type="button"
          disabled={ !disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
