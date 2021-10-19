import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
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
        >
          Entrar
        </button>
      </div>
    );
  }
}
