import React from 'react';
import '../App.css';
import { Container } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // função auxiliar pega do slack, sugestão do colega Michael Caxias
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  render() {
    const { email, senha } = this.state;
    const MININUM_NUMBER = 6;
    return (
      <Container maxWidth="sm">
        <div>
          <h2>Login</h2>
          <form>
            <label htmlFor="input-email">
              Email:
              <input
                data-testid="email-input"
                id="input-email"
                name="email"
                type="text"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-password">
              senha:
              <input
                data-testid="password-input"
                type="password"
                name="senha"
                id="input-password"
                value={ senha }
                onChange={ this.handleChange }
              />
            </label>
            <button
              disabled={ !this.isEmailValid(email) || senha.length < MININUM_NUMBER }
              type="button"
            >
              Entrar

            </button>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
