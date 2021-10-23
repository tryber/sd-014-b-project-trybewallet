import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.onButtonEntrar = this.onButtonEntrar.bind(this);
  }

  // redirecionando para pagina carteira
  onButtonEntrar() {
    const { email } = this.state;
    const {
      history,
      dispatchSetValue,
    } = this.props;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // validação do email
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  checkEmail(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  // validação da senha
  checkPassword(password) {
    const seis = 6;
    return (password.length >= seis);
  }

  render() {
    const {
      email,
      password,
    } = this.state;

    const isPasswordValid = this.checkPassword(password);
    const isEmailValid = this.checkEmail(email);

    return (
      <form>
        <fieldset>
          <label
            htmlFor="email"
          >
            Email
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            disabled={ !(isPasswordValid && isEmailValid) }
            onClick={ this.onButtonEntrar }
          >
            Entrar
          </button>
        </fieldset>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(setUserEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);
