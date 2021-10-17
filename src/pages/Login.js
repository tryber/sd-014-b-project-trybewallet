import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validateButton() {
    const { email, password } = this.state;
    // Solução desenvolvida com auxílio dos alunos Michael Caxias e Luiz Gustavo. // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    const LENGTH_PASSWORD = 6;
    const checkEmailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPass = password.length < LENGTH_PASSWORD;
    return !checkEmailInput.test(email) || checkPass;
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="text"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.validateButton() }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
