import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  toWallet() {
    const { history } = this.props;
    history.push('/carteira');
  }

  handleEmail(email) {
    this.setState(() => ({
      email,
    }));
  }

  handlePassword(password) {
    this.setState(() => ({
      password,
    }));
  }

  isEmailValid(email) {
    const regexEmail = /[\w]+@[\w]+.com/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const MIN_CHARACTERS = 6;
    const validEmail = this.isEmailValid(email);
    const validacao = validEmail && password.length >= MIN_CHARACTERS;
    return (
      <div>
        <input
          type="email"
          placeholder="E-mail"
          data-testid="email-input"
          onChange={ ({ target }) => this.handleEmail(target.value) }
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ ({ target }) => this.handlePassword(target.value) }
        />
        <button
          type="button"
          disabled={ !validacao }
          onClick={ this.toWallet }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
