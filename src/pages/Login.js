import React from 'react';
import { Redirect } from 'react-router';
import validator from 'validator';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    const min = 6;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <section>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ password.length < min || !validator.isEmail(email) }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
