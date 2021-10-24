import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailValue: '',
      passwordValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { emailValue, passwordValue } = this.state;
    const { handleChange } = this;

    return (
      <fieldset>
        <legend>TrybeWallet</legend>
        <label htmlFor="e-mail">
          Email:
          <input
            type="email"
            id="e-mail"
            data-testid="email-input"
            name="emailValue"
            onChange={ (e) => handleChange(e) }
            value={ emailValue }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            name="passwordValue"
            onChange={ (e) => handleChange(e) }
            value={ passwordValue }
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
