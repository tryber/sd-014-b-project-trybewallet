import React from 'react';
import validator from 'validator';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { disabled: true, password: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.changeButtonStatus = this.changeButtonStatus.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.changeButtonStatus();
  }

  changeButtonStatus() {
    const { email, password } = this.state;
    const minSize = 5;
    const emailIsValid = validator.isEmail(email);
    if (password.length >= minSize && emailIsValid) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { disabled, password, email } = this.state;
    return (
      <section>
        <input
          type="email"
          placeholder="Digite seu Email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
          name="email"
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
          name="password"
        />
        <button type="button" disabled={ disabled }>Entrar</button>
      </section>
    );
  }
}

export default Login;
