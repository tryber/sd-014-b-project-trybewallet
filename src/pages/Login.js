import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      // email: '',
      // password: '',
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
        <fieldset>
          <label
            htmlFor="email"
          >
            Email
            <input
              id="email"
              type="text"
              name="email"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>

          <button type="button">Entrar</button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
