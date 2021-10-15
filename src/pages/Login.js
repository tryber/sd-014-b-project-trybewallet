import React from 'react';
import styles from '../styles/login.module.scss';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const { email, password } = this.state;

    return (
      <form className={ styles.loginForm }>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ (event) => handleChange(event) }
        />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ (event) => handleChange(event) }
        />
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
