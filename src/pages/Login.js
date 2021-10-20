import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: '',
      password: '',
      emailValidate: false,
      passwordValidate: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (this.validateEmail(value)) {
        this.setState({
          emailValidate: true,
        });
      } else {
        this.setState({
          emailValidate: false,
        });
      }
    });
  }

  handlePassword({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const caracters = 6;
      if (value.length >= caracters) {
        this.setState({
          passwordValidate: true,
        });
      } else {
        this.setState({
          passwordValidate: false,
        });
      }
    });
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { email, password, emailValidate, passwordValidate } = this.state;
    let disabled = false;
    if (!emailValidate || !passwordValidate) {
      disabled = true;
    }
    return (
      <div>
        Login
        <form>
          <input
            name="email"
            type="text"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            name="password"
            type="password"
            value={ password }
            onChange={ this.handlePassword }
            data-testid="password-input"
          />
          <button type="button" disabled={ disabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
