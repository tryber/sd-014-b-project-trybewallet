import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginInfoAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };
    this.emailAndPasswordVerify = this.emailAndPasswordVerify.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  emailAndPasswordVerify({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    this.setState({
      [name]: value,
    });
    // Expressao Regular para Validacao de Email retirado do site Stackoverflow//
    // Source: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail//
    const mailformat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passwordLength = 5;
    if (email.match(mailformat) && password.length >= passwordLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleLogin() {
    const { dispatchEmailToState } = this.props;
    dispatchEmailToState(this.state);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { disabled, email, password, redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to="/carteira" />
      );
    }
    return (
      <div>
        <label htmlFor="inputEmail">
          Email:
          <input
            value={ email }
            onChange={ this.emailAndPasswordVerify }
            data-testid="email-input"
            name="email"
            type="text"
          />
        </label>
        <label htmlFor="inputPassword">
          Password:
          <input
            value={ password }
            onChange={ this.emailAndPasswordVerify }
            data-testid="password-input"
            name="password"
            type="password"
          />
        </label>
        <button
          disabled={ disabled }
          onClick={ this.handleLogin }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchEmailToState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailToState: ({ email }) => dispatch(loginInfoAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
