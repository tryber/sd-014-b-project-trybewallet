import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.isEmailValid = this.isEmailValid.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      user: {
        email: '',
      },
      passwordLength: 0,
    };
  }

  // Função de validação de email
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email); // retorna TRUE se regexEmail for válido
  }

  // Função para setar o email e o tamanho da senha do usuário do estado local
  handleLogin(event) {
    if (event.target.type === 'email') {
      this.setState({
        user: {
          email: event.target.value,
        },
      });
    }

    if (event.target.type === 'password') {
      this.setState({
        passwordLength: event.target.value.length,
      });
    }
  }

  render() {
    const { user: { email }, passwordLength } = this.state;
    const MIN_PASSWORD_LENGTH = 6;

    return (
      <div>
        <input type="email" data-testid="email-input" onChange={ this.handleLogin } />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleLogin }
        />
        <Link to="/carteira">
          <button
            type="button"
            // Se as duas condições retornarem false, disabled === false;
            disabled={ !this.isEmailValid(email) || passwordLength < MIN_PASSWORD_LENGTH }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
