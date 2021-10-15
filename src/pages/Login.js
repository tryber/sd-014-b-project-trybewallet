import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="Logo da Trybe"
          height="150px"
        />
        <form>
          <Input
            testid="email-input"
            name="email"
            type="email"
            placeholder="Digite seu email"
          />
          <br />
          <br />
          <Input
            testid="password-input"
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <br />
          <br />
          <Button
            testid="login-btn"
            label="Entrar"
          />
        </form>
      </div>
    );
  }
}

export default Login;
