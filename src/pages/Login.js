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

  activateLoginButton() {
    const { emailInput, passwordInput } = this.state;
    const emailBool = emailInput.includes('@') && emailInput.endsWith('.com');
    const minLength = 6;
    const passwordBool = passwordInput.length >= minLength;
    if (emailBool && passwordBool) {
      return true;
    }
    return false;
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
            disabled={ !activateLoginButton() }
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
