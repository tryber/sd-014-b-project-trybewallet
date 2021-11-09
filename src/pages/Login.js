import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: '',
      passwordInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { emailInput } = this.state;
    const { submitEmail, history } = this.props;

    submitEmail(emailInput);
    history.push('/carteira');
  }

  render() {
    const { emailInput, passwordInput } = this.state;
    const SIX = 6;
    const validateEmail = /\S+@\S+\.\S+/;
    return (
      <div>
        Login
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="emailInput"
              data-testid="email-input"
              value={ emailInput }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="password"
              name="passwordInput"
              data-testid="password-input"
              value={ passwordInput }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ !(validateEmail.test(emailInput) && passwordInput.length >= SIX) }
            onClick={ () => this.handleSubmit() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitEmail: (state) => dispatch(getEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  submitEmail: PropTypes.func,
}.isRequired;
