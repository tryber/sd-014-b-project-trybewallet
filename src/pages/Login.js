import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../actions';

class Login extends React.Component {
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
    this.setState({
      [name]: value,
    });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const { logarFunction } = this.props;
    const MIN_CHARACT = 6;

    return (
      <>
        <h2>Login</h2>
        <input
          placeholder="Seu email"
          data-testid="email-input"
          type="text"
          required
          name="email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          placeholder="Digite sua senha"
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          onClick={ logarFunction }
          disabled={ !((password.length >= MIN_CHARACT) && this.isEmailValid(email)) }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  logarFunction: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logarFunction: (state) => dispatch(emailAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
