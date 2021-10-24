import React, { Component } from 'react';

const MIN_LENGTH_PASSWORDS = 6;

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  checkEmail() {
    // Lógica da validação de email https://ui.dev/validate-email-address-javascript/
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  }

  checkPassword() {
    const { password } = this.state;
    return password.length >= MIN_LENGTH_PASSWORDS;
  }

  checkDataLogin() {
    return this.checkEmail() && this.checkPassword();
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            id="email-input"
            data-testid="email-input"
            type="text"
            placeholder="seu email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            id="password-input"
            data-testid="password-input"
            type="text"
            placeholder="senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <a href="/carteira">
          <button
            type="button"
            // onClick={ () => this.handleClick() }
            disabled={ !this.checkDataLogin() }
          >
            Entrar
          </button>
        </a>
      </form>
    );
  }
}
