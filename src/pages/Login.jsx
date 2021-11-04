/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail, setUserPassword } from '../actions';
import '../styles/login.css';
import finances from '../images/finances.jpg';

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
      <section className="w-full h-full flex justify-center items-center bg-gray-800">
        <div className="w-5/6 h-4/6 flex justify-center rounded shadow-md log-container">
          <div className="w-1/2 h-full bg-gray-50">
            <img
              src={ finances }
              alt="finance"
              className="w-full h-full opacity-90 object-cover"
            />
          </div>
          <form
            className="w-4/6 h-full flex flex-col justify-center items-center
          bg-gradient-to-t from-gray-200 via-gray-100 to-gray-50"
          >
            <label htmlFor="email" className="text-gray-900">
              Email
              <input
                className="border-2 border-gray-100 focus:border-blue-600
                focus:border-opacity-50 transition duration-300"
                type="email"
                value={ email }
                name="email"
                data-testid="email-input"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password" className="text-gray-900">
              Senha
              <input
                className="border-2 border-gray-100 focus:border-blue-600
                focus:border-opacity-50 transition duration-300"
                type="password"
                value={ password }
                name="password"
                data-testid="password-input"
                onChange={ this.handleChange }
              />
            </label>
            <button
              className="px-4 py-1 bg-blue-600 rounded-sm text-gray-50
              hover:bg-blue-700 disabled:opacity-50 transition duration-300"
              type="button"
              disabled={ !((isEmailValid && isPasswordValid)) }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </form>
        </div>
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
  userEmail: state.user.email,
  userPassword: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  setUserEmailLogin: (email) => dispatch(setUserEmail(email)),
  setUserPasswordLogin: (password) => dispatch(setUserPassword(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
