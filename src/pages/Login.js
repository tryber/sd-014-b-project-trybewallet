import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendUserInfo } from '../actions';

/* O email está no formato válido, como 'alguem@alguem.com'.

A senha possui 6 ou mais caracteres.

Salve o email no estado da aplicação, com a chave email, assim que a pessoa usuária logar.

A rota deve ser mudada para '/carteira' após o clique no botão 'Entrar'. */

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.allowSubmit = this.allowSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  allowSubmit() {
    const { email, password } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const SEIS = 6;
    const correctPassword = password.length >= SEIS;

    return !regex || !correctPassword;
  } // Referência: https://github.com/tryber/sd-014-b-project-trybewallet/pull/3/files

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          data-testid="email-input"
          placeholder="e-mail"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ this.allowSubmit() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (payload) => dispatch(sendUserInfo(payload)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
