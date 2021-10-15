import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserEmail as saveUserEmailAction } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handleLogin() {
    const { history, saveUserEmail } = this.props;
    const { email } = this.state;
    saveUserEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MIN_LENGTH = 6;
    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
        />
        <button
          type="button"
          onClick={ this.handleLogin }
          disabled={ !(this.isEmailValid(email) && password.length >= MIN_LENGTH) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (email) => dispatch(saveUserEmailAction(email)),
});

Login.propTypes = {
  saveUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

/*
Referências:
Regex para validação de email:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
