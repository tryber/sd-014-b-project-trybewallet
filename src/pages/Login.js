import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.validation());
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  validation() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const validEmail = this.isEmailValid(email);

    if (validEmail && password.length >= minPasswordLength) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <div>

        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }

        />

        <input
          name="password"
          type="text"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />

        <button
          type="button"
          disabled={ disabledButton }

        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
