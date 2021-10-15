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
    const { name, value } = target;
    console.log('Função ok');
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    const minChar = 6;
    return (
      <form>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          name="senha"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
          value={ senha }
        />
        <button type="button" disabled={ senha.length < minChar }> Entrar </button>
      </form>
    );
  }
}

export default Login;
