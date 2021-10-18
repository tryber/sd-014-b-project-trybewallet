import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
    );
  }

  // Ajuda do Michael Caxias para fazer o regex

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const { emailDispatch, history } = this.props;
    const num = 6;
    const disabled = password.length >= num && this.isEmailValid(email);
    return (
      <form>
        <input
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
          name="email"
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          name="password"
        />
        <button
          type="button"
          disabled={ !disabled }
          onClick={ () => {
            emailDispatch(email);
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
