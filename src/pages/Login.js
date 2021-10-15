import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { userEmail } from '../actions';
import '../css/loginPageCss.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ValidateEmail = this.ValidateEmail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.ValidateEmail();
  }

  handleSubmit() {
    const { history, dispatchLoginInfo } = this.props;
    const { email } = this.state;
    dispatchLoginInfo(email);
    history.push('/carteira');
  }

  ValidateEmail() {
    const { password, email } = this.state;
    const PASSWORD_LENGTH = 6;
    const REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi;
    const validateLogin = REGEX.test(email) && password.length >= PASSWORD_LENGTH - 1;
    this.setState({
      disabled: !validateLogin,
    });
  }

  render() {
    const { disabled } = this.state;
    return (
      <div className="login-container">
        <div className="login-box">
          <div>
            <img
              className="image-login"
              src="https://i.pinimg.com/originals/1c/76/a1/1c76a1b06a15db78539fb365b121615d.jpg"
              alt="imagem carteira"
            />
          </div>
          <h1 className="login-title">Trybe Wallet</h1>
          <Input
            name="email"
            dataTestId="email-input"
            placeText="email"
            type="email"
            onChange={ this.handleChange }
          />
          <Input
            name="password"
            dataTestId="password-input"
            placeText="senha"
            type="password"
            onChange={ this.handleChange }
          />
          <button
            className={ disabled ? 'button-disable' : 'button-active' }
            disabled={ disabled }
            onClick={ this.handleSubmit }
            type="submit"
          >
            Entrar
          </button>
        </div>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatchLoginInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginInfo: (keyAndValue) => dispatch(userEmail(keyAndValue)),
});

export default connect(null, mapDispatchToProps)(Login);
