import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  } // handleChange padrão para alterar o state dinamicamente

  handleSubmit() {
    const { email, password } = this.state;
    console.log(email, password);
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="email">
          <input
            placeholder="Insira seu email"
            id="email"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          Email
        </label>
        <label htmlFor="password">
          <input
            placeholder="Insira sua senha"
            id="password"
            type="text"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          Senha
        </label>
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
