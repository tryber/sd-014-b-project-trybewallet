import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      passwordMinLength: 6,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  // https://backefront.com.br/validacao-email-javascript/

  validateEmail() {
    const { email } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    return validEmail.test(email);
  }

  validatePassword() {
    const { password, passwordMinLength } = this.state;
    if (password.length >= passwordMinLength) return true;
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            name="password"
            id="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !this.validateEmail() || !this.validatePassword() }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
