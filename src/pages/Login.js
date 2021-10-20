import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange({ target }) {
    const { name } = target;

    await this.setState({ [name]: target.value });
  }

  render() {
    // Tive que colocar 5 por problema de asincronidade
    const passMinLenth = 5;
    // https://www.w3resource.com/javascript/form/email-validation.php
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !(email.match(reg)) || (password.length <= passMinLenth) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
