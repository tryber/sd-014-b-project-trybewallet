import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      password: '',
      email: '',
    };
  }

  componentDidUpdate() {
    this.enableButton();
  }

  handleChange({ target }) {
    const { type, value } = target;
    this.setState({
      [type]: value,
    });
  }

  enableButton() {
    const { password, email } = this.state;
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const minLength = 6;
    if (password.length >= minLength && regex.test(email)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <form>
          <h1>Login</h1>
          <input
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ this.enableButton() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
