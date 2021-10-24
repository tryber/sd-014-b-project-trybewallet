import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDataLogin } from '../actions/user';

const MIN_LENGTH_PASSWORDS = 6;

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setDataLoginStore } = this.props;
    const { email } = this.state;
    setDataLoginStore(email);
  }

  checkEmail() {
    // Lógica da validação de email https://ui.dev/validate-email-address-javascript/
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  }

  checkPassword() {
    const { password } = this.state;
    return password.length >= MIN_LENGTH_PASSWORDS;
  }

  checkDataLogin() {
    return this.checkEmail() && this.checkPassword();
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            id="email-input"
            data-testid="email-input"
            type="text"
            placeholder="seu email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            id="password-input"
            data-testid="password-input"
            type="text"
            placeholder="senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ !this.checkDataLogin() }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDataLoginStore: (dataLogin) => dispatch(addDataLogin(dataLogin)),
});

LoginForm.propTypes = {
  setDataLoginStore: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(LoginForm);
