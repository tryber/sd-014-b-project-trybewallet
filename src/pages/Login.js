import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validateEmail(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const minChars = 6;
    const disabled = password.length >= minChars && this.validateEmail(email);
    return (
      <section>
        <h1>TrybeWallet</h1>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !disabled }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
