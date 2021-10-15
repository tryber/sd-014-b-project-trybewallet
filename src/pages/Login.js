import React, { Component } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

class Login extends Component {
  constructor() {
    super();

    this.enableOrDisableButton = this.enableOrDisableButton.bind(this);
    this.maskEmail = this.maskEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      emailMasked: false,
      disabled: true,
    };
  }

  maskEmail() {
    const { email } = this.state;
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regEx.test(email)) return this.setState({ emailMasked: true });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.maskEmail();
      this.enableOrDisableButton();
    });
  }

  enableOrDisableButton() {
    const { emailMasked, password } = this.state;
    const minLengthPassword = 6;
    if (emailMasked && password.length >= minLengthPassword) {
      return this.setState({ disabled: false });
    }
  }

  submitUsers() {
    console.log('AI SIM');
  }

  render() {
    const { state: { email, password, disabled } } = this;
    return (
      <main>
        <section className="container-input">
          <Input
            type="email"
            value={ email }
            id="email"
            textLabel="Email: "
            className="input-login"
            onChange={ this.handleChange }
            dataTestId="email-input"
          />

          <Input
            type="password"
            value={ password }
            id="password"
            className="input-login"
            textLabel="Senha: "
            onChange={ this.handleChange }
            dataTestId="password-input"
          />

          <Button
            textButton="Entrar"
            onClick={ this.submitUsers }
            disabled={ disabled }
            className="btn-submit"
          />
        </section>
      </main>
    );
  }
}

export default Login;
