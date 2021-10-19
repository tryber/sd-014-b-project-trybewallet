import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      buttonDisabled: true,
    }
    this.handleChange=this.handleChange.bind(this);
    this.activateButton=this.activateButton.bind(this);
  };

  emailValidation(email) {
    // fonte: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const regex = /\S+@\S+\.com+/;
    return regex.test(email);
  }

  passwordValidation(password) {
    const minLength = 6;
    if(password.length >= minLength) return true;
  }

  activateButton() {
    const { emailInput, passwordInput } = this.state;
    if (this.emailValidation(emailInput) && this.passwordValidation(passwordInput)) {
      return this.setState({buttonDisabled: false});
    }
    else this.setState({buttonDisabled: true});
  }

  handleChange({target: { name, value } }) {
    this.setState({[name]: value,}, () => this.activateButton());
  }

  renderForm() {
  const { emailInput, passwordInput, buttonDisabled } = this.state;
    return(
      <form>
        <label htmlFor="email-input">
          E-mail
          <input
            data-testid="email-input"
            name="emailInput"
            type="email"
            placeholder="Digite seu e-mail"
            value={ emailInput }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            data-testid="password-input"
            name="passwordInput"
            type="password"
            placeholder="Digite sua senha"
            value={ passwordInput }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ buttonDisabled }>
          Entrar
        </button>
        </form>
    );
  }

 render() {
    return(
      <nav>
        {this.renderForm()}
      </nav>
    );
  }
}

export default Login;
