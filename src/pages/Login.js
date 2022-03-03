import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailInput } from '../actions';

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

  // Peguei as funções de validação do repositório do Fabrício Cardoso

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
    const { saveEmail } = this.props;
    return (
      <section>
        <form>
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
            <button
              type="button"
              disabled={ this.validationLogin() }
              onClick={ () => saveEmail(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

const mapDispatchToPros = (dispatch) => ({
  saveEmail: (payload) => dispatch(emailInput(payload)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToPros)(Login);
