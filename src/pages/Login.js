import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
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
