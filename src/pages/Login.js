import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: '',
      passwordInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.disabledButton = this.disabledButton.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  // disabledButton() {
  //   const { emailInput, passwordInput } = this.state;
  //   const validateEmail = /\S+@\S+\.\S+/;

  //   if (emailInput === validateEmail && passwordInput.length > 6) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    const { emailInput, passwordInput } = this.state;
    const SIX = 6;
    const validateEmail = /\S+@\S+\.\S+/;
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
              value={ emailInput }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="password"
              name="passwordInput"
              data-testid="password-input"
              value={ passwordInput }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ !(validateEmail.test(emailInput) && passwordInput.length >= SIX) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
