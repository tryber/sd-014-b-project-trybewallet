import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      buttonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const MIN_NAME_LENTGH = 3;
    this.setState({
      [name]: value,
    });
    if (name === 'name') {
      this.setState({
        buttonDisabled: value.length < MIN_NAME_LENTGH,
      });
    }
  }

  render() {
    const { name, password, buttonDisabled } = this.state;
    return (
      <form>
        <label htmlFor="nome-input">
          Nome:
          <input
            type="text"
            name="name"
            id="nome-input"
            data-testid="email-input"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password"
            id="password-input"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" disabled={ buttonDisabled }>Entrar</button>
      </form>
    );
  }
}

export default Login;
