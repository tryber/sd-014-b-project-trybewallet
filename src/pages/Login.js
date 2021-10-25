import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  onSubmit() {
    const { history, myFirstDispatch } = this.props;
    const { email } = this.state;
    myFirstDispatch(email);
    history.push('/carteira');
  }

  /** https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
   * anyString@anyString.anyString */
  checkEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const minLength = 6;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          disabled={ !(this.checkEmail(email) && password.length >= minLength) }
          onClick={ this.onSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

/** Ref: disabled no button, consultei o repositório do
 * https://github.com/tryber/sd-014-b-project-trybewallet/pull/58/commits/c20af0f7bcd44701409e390d0ce2e55feedddc2a */

Login.propTypes = {
  myFirstDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (email) => dispatch(emailUser(email)) });

// req 3 não está passando ainda.

export default connect(null, mapDispatchToProps)(Login);
