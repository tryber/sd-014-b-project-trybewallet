import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div>
        Login
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="emailInput"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="password"
              name="passwordInput"
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
