import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      availableButton: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  

  render() {
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Digite seu email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Insira sua senha"
          minLength="6"
          onChange={ this.handleChange }
        />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
