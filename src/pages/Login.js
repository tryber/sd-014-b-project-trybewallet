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

  handleChange({ target }) { // Função generica para pegar as alterações do input e salvar no estado do component.
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    console.log(this.state);
    return (
      <form>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
