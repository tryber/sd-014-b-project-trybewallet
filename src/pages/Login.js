import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

  render() {
    const emailValid = (email) => {
      const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regexEmail.test(email);
    };

    const { email, senha } = this.state;

    const validEmailState = emailValid(email);
    const numberMaxCharacters = 6;

    const buttonEnable = validEmailState && senha.length >= numberMaxCharacters;

    return (
      <section>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="email">
          Senha:
          <input
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
            type="text"
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ !buttonEnable }
          data-testid="login"
          type="button"
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
