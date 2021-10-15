import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      statusButton: true,
      email: '',
      password: '',
    };
  }

  statusButtonFunction = (event) => {
    const minNumber = 5;
    this.setState({
      [event.target.name]: event.target.value,
    })
    const { email, password } = this.state;
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    const passwordValid = password.length >= minNumber;
    if (regexEmail && passwordValid) {
      this.setState({ statusButton: false, })
    }
  }

  render() {
    const { statusButton, email, password } = this.state;
    return (
      <section>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          data-testid="email-input"
          value={ email }
          onChange={ this.statusButtonFunction }
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
          value={ password }
          onChange={ this.statusButtonFunction }
        />
        <button
          type="button"
          disabled={ statusButton }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
