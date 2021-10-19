import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      statusBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const MIN_CHARACTERES_IN_PASSWORD = 5;

    this.setState({
      [name]: value,
    });

    const { email, password } = this.state;
    // ref: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const regexEmail = /\S+@\S+\.\S+/.test(email);
    const validPassword = password.length >= MIN_CHARACTERES_IN_PASSWORD;
    if (regexEmail && validPassword) {
      this.setState({ statusBtn: false });
    }
  }

  render() {
    const { email, password, statusBtn } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Login:
          <br />
          <input
            type="email"
            name="email"
            id="email-input"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha:
          <br />
          <input
            type="password"
            name="password"
            id="password-input"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ statusBtn }
        >
          Entrar
        </button>
      </div>
    );
  }
}
