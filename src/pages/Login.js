import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.setandoEstado = this.setandoEstado.bind(this);

    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
  }

  setandoEstado({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const successfulEmail = this.validarEmail(email);
      const successfulPasswor = this.validarPassWord(password);

      this.validarButton(successfulEmail, successfulPasswor);
    });
  }

  validarEmail(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  } // Dica do Michael pelo slack

  validarPassWord(password) {
    const numeroMinimoDeCaracteres = 6;
    if (password.length >= numeroMinimoDeCaracteres) {
      return true;
    }
    return false;
  }

  validarButton(email, password) {
    if (email === true && password === true) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  confirmLog(value) {
    const { dispatchEmail, history } = this.props;
    dispatchEmail(value);

    history.push('./carteira');
  }// { confirmLog } criado com aulixo do repositorio de Mariana Ferreira https://github.com/tryber/sd-014-b-project-trybewallet/blob/mariana-trybe-wallet/src/pages/Login.js

  render() {
    const { buttonDisabled, password, email } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="email">
              <input
                data-testid="email-input"
                value={ email }
                type="email"
                name="email"
                placeholder="Digite seu Email"
                onChange={ this.setandoEstado }
              />
            </label>

            <label htmlFor="password">
              <input
                data-testid="password-input"
                value={ password }
                type="password"
                name="password"
                placeholder="Digite sua senha"
                onChange={ this.setandoEstado }
              />
            </label>

            <button
              type="button"
              name="button"
              disabled={ buttonDisabled }
              onClick={ () => this.confirmLog(email) }
            >
              Entrar

            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  dispatchEmail: (value) => dispatch(setEmail(value)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, MapDispatchToProps)(Login);
