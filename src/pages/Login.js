import React from 'react';

class Login extends React.Component {
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
    this.setState({ [name]: value });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const SIX = 6;
    const disabled = password.length >= SIX && this.isEmailValid(email);
    return (
      <div>
        Login
        <input
          data-testid="email-input"
          name="email"
          value={ email }
          type="text"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          value={ password }
          type="password"
          onChange={ this.handleChange }
        />
        <button type="button" disabled={ !disabled }>Entrar</button>

      </div>

    );
  }
}

export default Login;
