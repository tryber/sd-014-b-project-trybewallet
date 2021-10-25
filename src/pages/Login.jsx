import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginActions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value }, () => {
      const { email, password } = this.state;
      const validFields = this.validateEmail(email) && this.validatePassword(password);
      this.setState({ isDisabled: !validFields });
    });
  }

  validateEmail(email) {
    const validEmail = /\S+@\S+\.\S+/;
    return validEmail.test(email);
  }

  validatePassword(password) {
    const VALID_LENGTH = 6;
    return password.length >= VALID_LENGTH;
  }

  handleFormSubmit() {
    const { history, submitLogin } = this.props;
    const { email, password } = this.state;
    submitLogin({ email, password });
    history.push('/carteira');
  }

  render() {
    const { isDisabled, email, password } = this.state;
    return (
      <section>
        <input
          data-testid="email-input"
          onChange={ this.handleChange }
          id="email"
          type="email"
          value={ email }
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          id="password"
          type="password"
          value={ password }
        />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleFormSubmit }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  submitLogin: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (loginInfo) => dispatch(loginAction(loginInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
