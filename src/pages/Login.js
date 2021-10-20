import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    console.log(name + value);
    this.setState({
      user: {
        [name]: value,
      },
    });
  }

  render() {
    const { user: { email, password } } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          <input
            id="email-input"
            data-testid="email-input"
            type="text"
            placeholder="seu email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            id="password-input"
            data-testid="password-input"
            type="text"
            placeholder="senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
