import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputValid = this.inputValid.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputValid() {
    const { email, password } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // Usei essa Theread para verificar email https://trybecourse.slack.com/archives/C023YHXAEGM/p1634586091402700

    const SEIS = 6;
    const correctPassword = password.length >= SEIS;

    return !regex || !correctPassword;
    // usei esse Repo de referência para esta função
    // https://github.com/tryber/sd-014-b-project-trybewallet/pull/86/
  }

  render() {
    const { email, password } = this.state;

    return (
      <section className="login">
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ this.inputValid() }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
