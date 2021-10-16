import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.handleDisabled());
  }

  // Referência a thread no slack do tryber Michael Caxias

  handleDisabled() {
    const { email, password } = this.state;
    const regexEmail = /(.*)@(.*).com/;
    const passwordMinLength = 6;

    if (regexEmail.test(email) && password.length >= passwordMinLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Login
          <input
            type="email"
            data-testid="email-input"
            name="email"
            placeholder="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
