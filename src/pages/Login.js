import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import trybeWalletLogo from '../images/logo_icon.png';
import '../styles/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const MIN_PASSWORD_LENTGH = 6;
    let { email, password } = this.state;
    if (name === 'email') email = value;
    if (name === 'password') password = value;
    const isPasswordsValid = password.length >= MIN_PASSWORD_LENTGH;

    this.setState({
      [name]: value,
      buttonDisabled: !(this.isEmailValid(email) && isPasswordsValid),
    });
  }

  handleSubmit() {
    const { name, email, password } = this.state;
    const { handleLogin, saveUserInfo } = this.props;
    handleLogin();
    saveUserInfo({ name, email, password });
    localStorage.setItem('trybe-wallet-email', email);
    localStorage.setItem('trybe-wallet-name', name);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { name, email, password, buttonDisabled } = this.state;
    return (
      <>
        <div className="logo-login-container">
          <img src={ trybeWalletLogo } alt="logo icon" />
          <span className="trybe">TRYBE</span>
          <span className="wallet">Wallet</span>
        </div>
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <input
              type="text"
              name="name"
              id="nome-input"
              data-testid="nome-input"
              placeholder="Nome"
              value={ name }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="email"
              id="email-input"
              data-testid="email-input"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
            />
            <input
              type="password"
              name="password"
              id="password-input"
              data-testid="password-input"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              disabled={ buttonDisabled }
              onClick={ this.handleSubmit }
              className="login-btn"
            >
              Entrar
            </button>
          </form>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  saveUserInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserInfo: (userInfo) => dispatch(addUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
