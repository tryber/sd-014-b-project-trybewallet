import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState = ({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <div>
          <input
            data-testid="email-input"
            onChange={ this.handleInput }
            required
            type="email"
            value={ email }
          />
          <input
            data-testid="password-input"
            value={ password }
            type="password"
          />
          <input
            type="button"
            value="Entrar"
          />
        </div>
      </section>
    );
  }
}

export default Login;
