import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import '../App.css';
import { loginEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  ValidarEmail(email) {
    const valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return valid.test(email);
  }

  handleEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }

  handlePassword({ target }) {
    this.setState({
      password: target.value,
    });
    const { password, email } = this.state;
    const NUMBER_FIVE = 5;
    if (password.length >= NUMBER_FIVE && this.ValidarEmail(email)) {
      this.setState({
        disabled: false,
      });
    }
  }

  // https://irias.com.br/blog/como-validar-email-e-senha-em-javascript/

  handleClick() {
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { disabled, email, password } = this.state;
    return (
      <section className="login-page">
        <form>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            value={ email }
            onChange={ this.handleEmail }
            name="email"
          />
          <input
            type="text"
            data-testid="password-input"
            name="password"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ this.handlePassword }
          />
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatchEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(loginEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
