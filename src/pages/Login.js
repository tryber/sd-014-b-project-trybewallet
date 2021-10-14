// Requisito 1: criação do campo de login
import React from 'react';
// Requisito 2: verificação de campos
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.inputValidation = this.inputValidation.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.inputValidation();
  }

  inputValidation() {
    const { email, password } = this.state;
    const emailValidation = /(.*)@(.*).com/;
    const passwordMinLength = 5;

    if (emailValidation.test(email) && passwordMinLength <= password.length) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="input-password">
            <input
              name="password"
              type="password"
              placeholder="Senha"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleInput }
            />
          </label>
          <Link to="/carteira">
            <button type="button" disabled={ buttonDisabled }>Entrar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
