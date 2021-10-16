import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail, setUserPassword } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handlePasswordValidation = this.handlePasswordValidation.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email, password } = this.state;
    const { setUserEmailLogin, setUserPasswordLogin, history } = this.props;
    setUserEmailLogin(email);
    setUserPasswordLogin(password);
    history.push('/carteira');
  }

  handleEmailValidation(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handlePasswordValidation(password) {
    const NUMBER_SIX = 6;
    return (password.length >= NUMBER_SIX);
  }

  render() {
    const { email, password } = this.state;
    const isEmailValid = this.handleEmailValidation(email);
    const isPasswordValid = this.handlePasswordValidation(password);
    return (
      <section>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              value={ email }
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              value={ password }
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ !((isEmailValid && isPasswordValid)) }
            onClick={ this.handleClick }
          >
            Entrar

          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  setUserEmailLogin: PropTypes.func.isRequired,
  setUserPasswordLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.userReducer.user.email,
  userPassword: state.userReducer.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  setUserEmailLogin: (email) => dispatch(setUserEmail(email)),
  setUserPasswordLogin: (password) => dispatch(setUserPassword(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
