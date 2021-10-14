// Requisito 1: criação do campo de login
import React from 'react';
// Requisito 2: verificação de campos
import { Link } from 'react-router-dom';
// Requisito 3: salvar o estado global do login
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmailUser } from '../actions/index';

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
    this.handleEmailToStoreButton = this.handleEmailToStoreButton.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.inputValidation();
  }

  handleEmailToStoreButton() {
    const { email } = this.state;
    const { setEmailAction } = this.props;
    setEmailAction(email);
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
            <button
              type="button"
              disabled={ buttonDisabled }
              onClick={ this.handleEmailToStoreButton() }
            >
              Entrar

            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (payload) => dispatch(setEmailUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setEmailAction: PropTypes.func,
}.isRequired;
