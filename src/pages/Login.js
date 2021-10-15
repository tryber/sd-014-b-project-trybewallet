import React, { Component } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

class Login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  loginUser() {
    console.log('logou');
  }

  render() {
    const { state: { email, password } } = this;
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
            onClick={ this.loginUser }
            className="btn-submit"
          />
        </section>
      </main>
    );
  }
}

export default Login;
