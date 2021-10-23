import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginVerification = this.loginVerification.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.loginVerification();
  }

  loginVerification() {
    const { email, password } = this.state;
    const minPassworLength = 6;
    const validatedEmail = email.includes('@') && email.endsWith('.com');
    if (validatedEmail && password.length >= minPassworLength) {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  }

  render() {
    const { btnDisable } = this.state;
    return (
      <div>
        <form>
          <input
            id="email-input"
            data-testid="email-input"
            type="email"
            placeholder="Digite seu email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            id="passord-input"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={ this.handleChange }
          />
        </form>
        <button type="button" disabled={ btnDisable }>Entrar</button>
      </div>
    );
  }
}

export default Login;
