import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          name="email"
          value={ email }
          data-testid="email-input"
          type="email"
          placeholder="Digite seu email"
          onChange={ this.handleChange }
          required
        />
        <input
          name="password"
          value={ password }
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
          required
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
