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
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
