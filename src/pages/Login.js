import React from 'react';
import { connect } from 'react-redux';
import { saveUserEmail } from '../actions/userActions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginInputs() {
    const { email, password } = this.state;
    const MIN_PASS_LENGTH = 6;
    const testEmail = /\S+@\S+\.\S+/;
    if (testEmail.test(email) && password.length >= MIN_PASS_LENGTH) {
      return false;
    }

    return true;
  }

  handleLogin(event) {
    event.preventDefault();
    const { email } = this.state;
    const { history, saveEmail } = this.props;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <main className="login">
        <form onSubmit={ this.handleLogin } className="login-form">
          <input
            value={ email }
            onChange={ (event) => this.setState({ email: event.target.value }) }
            type="email"
            data-testid="email-input"
          />

          <input
            value={ password }
            onChange={ (event) => this.setState({ password: event.target.value }) }
            type="password"
            data-testid="password-input"
          />

          <button disabled={ this.checkLoginInputs() } type="submit">Entrar</button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
