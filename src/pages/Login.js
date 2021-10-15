import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: '',
      passwordInput: '',
      buttonSwitch: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.controlButton = this.controlButton.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  controlButton() {
    const { emailInput, passwordInput: { length } } = this.state;
    const PASSWORD_MIN_LENGTH = 5;

    if (length >= PASSWORD_MIN_LENGTH && this.isEmailValid(emailInput)) {
      this.setState({
        buttonSwitch: false,
      });
    }

    if (length < PASSWORD_MIN_LENGTH || this.isEmailValid(emailInput) === false) {
      this.setState({
        buttonSwitch: true,
      });
    }
  }

  render() {
    const { emailInput, passwordInput, buttonSwitch } = this.state;
    return (
      <main>
        <form>
          <input
            name="emailInput"
            value={ emailInput }
            type="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ (event) => {
              this.handleChange(event);
              this.controlButton();
            } }
          />
          <input
            name="passwordInput"
            value={ passwordInput }
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ (event) => {
              this.handleChange(event);
              this.controlButton();
            } }
          />
          <Link to="/carteira">
            <button disabled={ buttonSwitch } type="button">Entrar</button>
          </Link>
        </form>
      </main>
    );
  }
}

export default connect(null, null)(Login);
