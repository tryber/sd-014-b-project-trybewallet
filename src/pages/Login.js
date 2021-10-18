import React from 'react';
import PropTypes from 'prop-types';
import './LoginStyle.css';
import { connect } from 'react-redux';
import Image from './image-LoginPage.jpg';
import { handleEmailUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.loginVerification = this.loginVerification.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.loginVerification();
  }

  loginVerification() {
    const { email, password } = this.state;
    const minLengthPassword = 6;
    const emailSplit = email.split('');
    if (emailSplit
      .includes('@') && emailSplit[emailSplit.length - 1] !== '@' && emailSplit
      .includes('.') && emailSplit[emailSplit.length - 1] !== '.'
      && password.length + 1 >= minLengthPassword) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  clickButton() {
    const { history, userInfo } = this.props;
    const { email } = this.state;
    userInfo(email);
    history.push('/carteira');
  }

  render() {
    const { disabledButton } = this.state;

    return (
      <form className="form">
        <img className="image-login" src={ Image } alt="Imagem de uma carteira" />
        <h4 className="title-login-page">TrybeWallet</h4>
        <input
          id="input-email"
          data-testid="email-input"
          type="email"
          placeholder="Digite seu email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          id="input-password"
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Insira sua senha"
          onChange={ this.handleChange }
        />
        <button
          className="enter-button"
          type="button"
          disabled={ disabledButton }
          onClick={ () => this.clickButton() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userInfo: (userEmail) => dispatch(handleEmailUser(userEmail)),
});

Login.propTypes = {
  userInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
