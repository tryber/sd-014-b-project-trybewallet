import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, loginEmail } = this.props;
    const { email } = this.state;
    loginEmail(email);
    history.push('/carteira');
  }

  emailValidation(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  render() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const disabled = password.length >= passwordLength && this.emailValidation(email);
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Informe seu e-mail"
          name="emailInput"
          value={ email }
          onChange={ this.handleChange }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Informe sua senha"
          name="passwordInput"
          value={ password }
          onChange={ this.handleChange }
          required
        />
        <button
          type="button"
          disabled={ !disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginEmail: PropTypes.func.isRequired,
};

const mapsDispatchToProps = (dispatch) => ({
  loginEmail: (payload) => dispatch(user(payload)),
});

export default connect(null, mapsDispatchToProps)(Login);

// Conforme aula 15.5 - 15.6
