import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  disableBtn() {
    const N = 6;
    if (email.includes('@' && '.com') && password.length >= N) {
      return false;
    } return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={ this.handleChange }
          />
        </label>
        <button disabled={ disableBtn() } id="btn__submit" type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
