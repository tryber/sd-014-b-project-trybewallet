import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.logarFunction = this.logarFunction.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  logarFunction() {
    this.setState((state) => ({
      email: state.email,
    }));
    // render('/carteira') depois que salvar o email do state tenh que rendirecionar para rota /carteira.
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h2>Login</h2>
        <input
          data-testid="email-input"
          type="text"
          required
          name="email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          data-testid="password-input"
          type="password"
          minLength="6"
          name="passsword"
          required
          onChange={ this.handleChange }
          value={ password }
        />
        <button type="button" onClick={ this.logarFunction } disabled>Entrar</button>
      </>
    );
  }
}

export default Login;
