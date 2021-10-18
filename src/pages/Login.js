import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      passwordMinLength: 6,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  // https://backefront.com.br/validacao-email-javascript/

  validateEmail() {
    const { email } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    return validEmail.test(email);
  }

  validatePassword() {
    const { password, passwordMinLength } = this.state;
    if (password.length >= passwordMinLength) return true;
    return false;
  }

  handleClick() {
    const { history, dispatchUserEmail } = this.props;
    const { email } = this.state;
    dispatchUserEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            name="password"
            id="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !this.validateEmail() || !this.validatePassword() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserEmail: (email) => dispatch(saveUserLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
