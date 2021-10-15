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
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <section>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
            type="text"
            data-testid="password-input"
          />
        </label>
        <button data-testid="login" type="button">
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
