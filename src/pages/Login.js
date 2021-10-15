import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputEmail: '',
      inputPassword: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    return (
      <form>
        <label htmlFor="inputEmail">
          Email:
          <input
            type="email"
            id="inputEmail"
            value={ inputEmail }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="inputPassword">
          Senha:
          <input
            type="password"
            id="inputPassword"
            value={ inputPassword }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </form>);
  }
}

export default Login;
