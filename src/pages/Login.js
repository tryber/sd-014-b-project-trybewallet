import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      ableButton: '',
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

        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }

        />

        <input
          name="password"
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />

        <button
          type="button"

        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
