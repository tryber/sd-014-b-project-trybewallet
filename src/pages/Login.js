import React from 'react';
import styles from '../styles/login.module.scss';

class Login extends React.Component {
  render() {
    return (
      <form className={ styles.loginForm }>
        <input data-testid="email-input" type="text" placeholder="Email" />
        <input data-testid="password-input" type="text" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
