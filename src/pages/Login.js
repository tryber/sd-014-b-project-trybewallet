import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

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
  }

  render() {
    const { name, email, password, buttonDisabled } = this.state;
    return (
      <form>
        <label htmlFor="nome-input">
          Nome:
          <input
            type="text"
            name="name"
            id="nome-input"
            data-testid="nome-input"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email-input">
          Email:
          <input
            type="text"
            name="email"
            id="email-input"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password"
            id="password-input"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ buttonDisabled }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
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
