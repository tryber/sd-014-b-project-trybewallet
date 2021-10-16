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
        <form>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="email-input"
              name="email"
              defaultValue={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              data-testid="password-input"
              name="password"
              defaultValue={ password }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
