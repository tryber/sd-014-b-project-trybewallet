import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { user } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handlePasswordValidation = this.handlePasswordValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleEmailValidation(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handlePasswordValidation(password) {
    const NUMBER_SIX = 6;
    return (password.length >= NUMBER_SIX);
  }

  handleClick() {
    const { email } = this.state;
    const { setUser, history } = this.props;
    setUser(email);
    // setUserPasswordLogin(password);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const isEmailValid = this.handleEmailValidation(email);
    const isPasswordValid = this.handlePasswordValidation(password);
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              defaultValue={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              defaultValue={ password }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button
          disabled={ !((isEmailValid && isPasswordValid)) }
          type="button"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}
Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) => dispatch(user(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
