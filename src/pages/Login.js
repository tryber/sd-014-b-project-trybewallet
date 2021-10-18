import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.toWallet = this.toWallet.bind(this);
  }

  toWallet() {
    const { history, login } = this.props;
    const { email, password } = this.state;
    login({ email, password });
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
    const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    // consultei o repositório da Luana Moneró para procurar algum erro de lógica, Source: https://github.com/tryber/sd-014-b-project-trybewallet/pull/9
    // Porém meu erro foi de sintaxe
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
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (userinfo) => dispatch(sendLogin(userinfo)),
});

export default connect(null, mapDispatchToProps)(Login);
