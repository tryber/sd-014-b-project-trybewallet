import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserValue } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.toLogin = this.toLogin.bind(this);
  }

  toLogin() {
    const { email } = this.state;
    const { history, dispatchSetValue } = this.props;

    dispatchSetValue(email);
    history.push('/carteira');
  }

  validateButton() {
    const { email, password } = this.state;
    // Solução desenvolvida com auxílio dos alunos Michael Caxias e Luiz Gustavo. // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    const LENGTH_PASSWORD = 6;
    const checkEmailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPass = password.length < LENGTH_PASSWORD;
    return !checkEmailInput.test(email) || checkPass;
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="xablau">
          E-mail:
          <input
            id="xablau"
            name="email"
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="text"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.validateButton() }
          onClick={ this.toLogin }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (userEmail) => dispatch(setUserValue(userEmail)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
