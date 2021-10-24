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

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    console.log('cliquei');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
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
            onClick={ () => this.handleClick() }
          >
            Entrar
          </button>
        </a>
      </div>
    );
  }
}
