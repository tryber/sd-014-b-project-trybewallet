import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validationUserEmail = this.validationUserEmail.bind(this);
    this.validationDomainEmail = this.validationDomainEmail.bind(this);
    this.validationPassword = this.validationPassword.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  // Lógica de validação de e-mail retirada desse link https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427

  validationUserEmail() {
    const { email } = this.state;
    const usuario = email.substring(0, email.indexOf('@'));
    const FALSE = -1;
    if ((usuario.length >= 1)
      && (usuario.search('@') === FALSE)
      && (usuario.search(' ') === FALSE)
    ) {
      return true;
    }
    return false;
  }

  validationDomainEmail() {
    const { email } = this.state;
    const FALSE = -1;
    const LENGTH_DOMAIN = 3;
    const dominio = email.substring(email.indexOf('@') + 1, email.length);
    if (dominio
      && (dominio.length >= LENGTH_DOMAIN)
      && (dominio.search('@') === FALSE)
      && (dominio.search(' ') === FALSE)
      && (dominio.search('.') !== FALSE)
      && (dominio.indexOf('.') >= 1)
      && (dominio.lastIndexOf('.') < dominio.length - 1)) {
      return true;
    }
    return false;
  }

  validationPassword() {
    const { password } = this.state;
    const LENGTH_PASSWORD = 6;
    if (password.length >= LENGTH_PASSWORD) {
      return true;
    }
    return false;
  }

  validationLogin() {
    const { validationUserEmail, validationDomainEmail, validationPassword } = this;
    if (validationUserEmail() && validationDomainEmail() && validationPassword()) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>Login</h1>
        <label htmlFor="email-input">
          E-mail:
          <input
            data-testid="email-input"
            type="email"
            id="email-input"
            placeholder="Digite seu e-mail"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            id="password-input"
            placeholder="Digite sua senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button type="button" disabled={ this.validationLogin() }>Entrar</button>
        </Link>
      </>
    );
  }
}

export default Login;
