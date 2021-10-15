import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SEIS = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  // funçao retirada do site hora de codar
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validatePassword(password) {
    return password.length >= SEIS;
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <input
          data-testid="email-input"
          type="email"
          placeholder="E-mail"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handlePassword }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !this.validateEmail(email) || !this.validatePassword(password) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Login);
