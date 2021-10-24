import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userMail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.isEmailValid = this.isEmailValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  enableButton(email, password) {
    const minNumber = 6;
    return this.isEmailValid(email) && password.length >= minNumber;
  }

  // código retirado de: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { dispatchUserMail } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Digite seu email"
          name="email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          disabled={ !this.enableButton(email, password) }
          onClick={ () => {
            dispatchUserMail(email);
          } }
        >
          <Link to="/carteira"> Entrar </Link>
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchUserMail: (email) => dispatch(userMail(email)),
  };
}

Login.propTypes = {
  dispatchUserMail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
