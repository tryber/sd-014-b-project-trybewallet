import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { email } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: '',
      passwordInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.handleDispatch = this.handleDispatch.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  validateButton() {
    const { emailInput, passwordInput } = this.state;
    // Solução desenvolvida com auxílio dos alunos Michael Caxias e Luiz Gustavo.
    // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation

    const LENGTH_PASSWORD = 6;
    const checkEmailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPass = passwordInput.length < LENGTH_PASSWORD;

    return !checkEmailInput.test(emailInput) || checkPass;
  }

  handleDispatch() {
    const { history, dispatchSetValue } = this.props;

    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { emailInput, passwordInput } = this.state;

    return (
      <form>
        <label htmlFor="emailInput">
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            value={ emailInput }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            type="password"
            name="passwordInput"
            id="passwordInput"
            value={ passwordInput }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.validateButton() }
          onClick={ this.handleDispatch }
        >
          Entrar
        </button>
      </form>);
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (info) => dispatch(email(info)),
});

export default connect(null, mapDispatchToProps)(Login);
