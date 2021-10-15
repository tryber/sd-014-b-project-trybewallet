import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

    this.state = {
      inputEmail: '',
      inputPassword: '',
    };
  }

  handleChangePassword(event) {
    this.setState({
      inputPassword: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      inputEmail: event.target.value,
    });
  }

  validateEmail() {
    const { inputEmail } = this.state;
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (re.test(inputEmail)) {
      return true;
    }
    return false;
  }

  render() {
    const { inputPassword } = this.state;
    const number = 6;
    const buttonDisabled = inputPassword.length >= number && this.validateEmail();
    return (
      <section>
        <label htmlFor="email">
          <input
            type="email"
            onChange={ this.handleChangeEmail }
            placeholder="Email"
            id="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            onChange={ this.handleChangePassword }
            placeholder="Password"
            data-testid="password-input"
          />
        </label>
        <Link to="/wallet">
          <button
            type="button"
            disabled={
              !buttonDisabled
            }
          >
            Entrar
          </button>
        </Link>
      </section>);
  }
}

export default Login;
