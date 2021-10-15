import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.activateLoginButton = this.activateLoginButton.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.activateLoginButton());
  }

  verifyEmail() {
    const { emailInput } = this.state;
    const bool = emailInput.includes('@') && emailInput.endsWith('.com');
    return bool;
  }

  verifyPassword() {
    const { passwordInput } = this.state;
    const minLength = 6;
    return (passwordInput >= minLength);
  }

  activateLoginButton() {
    const email = this.verifyEmail();
    const password = this.verifyPassword();
    if (email && password) {
      return false;
    }
    return true;
  }

  render() {
    const { emailInput } = this.state;
    const { saveUserEmail } = this.props;
    const { handleChange, activateLoginButton } = this;
    return (
      <form>
        <input
          data-testid="email-input"
          placeholder="E-mail"
          name="emailInput"
          onChange={ handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          name="passwordInput"
          onChange={ handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ activateLoginButton() }
            onClick={ () => saveUserEmail(emailInput) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  saveUserEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
