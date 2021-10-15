import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import emailLogin from '../actions/index';

const SEIS = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  // funçao retirada do site hora de codar
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validatePassword(password) {
    return password.length >= SEIS;
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <input
          data-testid="email-input"
          type="email"
          placeholder="E-mail"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handlePassword }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !this.validateEmail(email) || !this.validatePassword(password) }
            onClick={ () => login({ email }) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
// Função consultada na https://github.com/tryber/sd-014-b-live-lectures/blob/lecture/15.5-16.5/clients-register/src/pages/Login.js
const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(emailLogin(e)),
});

export default connect(null, mapDispatchToProps)(Login);
