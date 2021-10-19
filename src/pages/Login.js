import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handlerButton = this.handlerButton.bind(this);
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerButton() {
    const { email, password, redirect } = this.state;
    console.log(email, password, redirect);
    this.setState({
      redirect: true,
    });
  }

  handlerInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    const n = 6;
    const validEmail = /\S+@\S+\.\S+/;
    const showButton = validEmail.test(email) && password.length >= n
    && email.split('').includes('@');
    if (redirect === true) return <Redirect to="/carteira" />;
    return (
      <form>
        Login
        <label htmlFor="email">
          <input
            value={ email }
            onChange={ this.handlerInput }
            type="email"
            name="email"
            data-testid="email-input"
          />
        </label>
        Password
        <label htmlFor="password">
          <input
            value={ password }
            onChange={ this.handlerInput }
            type="password"
            name="password"
            data-testid="password-input"
          />
        </label>
        <button
          onClick={ this.handlerButton }
          type="button"
          data-testid="login-submit-button"
          disabled={ !showButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
