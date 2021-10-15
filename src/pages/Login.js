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

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript?page=1&tab=votes#tab-top
  // pesquisei Como validar email através do JS e encontrei no link acima
  // também utilizei um vídeo https://www.youtube.com/watch?v=HzJngc-Se9Q
  // e o documento https://drive.google.com/drive/folders/1LjPe_VJRbzmM-QOex-mDH9ryz2_V0IyG
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
        <Link to="/carteira">
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
