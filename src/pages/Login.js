import React from 'react';
import { isValidEmail, isValidPassword } from '../validation';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const allFormInputsAreValid = isValidEmail(email) && isValidPassword(password);

    return (
      <main>
        <h2>Login</h2>
        <div>
          <form>
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
            <button type="submit" disabled={ !allFormInputsAreValid }>Entrar</button>
          </form>
        </div>
      </main>
    );
  }
}

export default Login;
