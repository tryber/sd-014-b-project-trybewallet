import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.validation());
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  validation() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const validEmail = this.isEmailValid(email);

    if (validEmail && password.length >= minPasswordLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleSubmit() {
    const { submitUserInfo, history } = this.props;
    const { email, password } = this.state;

    submitUserInfo({ email, password });

    this.setState({
      disabled: true,
    });

    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>

        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }

        />

        <input
          name="password"
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />

        <button
          type="submit"
          disabled={ disabled }
          onClick={ () => this.handleSubmit() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  submitUserInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitUserInfo: (payload) => (dispatch(loginAction(payload))),
});

export default connect(null, mapDispatchToProps)(Login);
