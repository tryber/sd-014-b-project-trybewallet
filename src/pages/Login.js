import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <input
          value={ email }
          data-testid="email-input"
          type="text"
          onChange={ this.handleChange }
          required
        />
        <input
          value={ password }
          data-testid="password-input"
          type="password"
          onChange={ this.handleChange }
          required
        />
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
