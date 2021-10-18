import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input type="text" text="E-mail" testId="email-input"/>
        <Input type="text" text="Senha" testId="password-input"/>
        <Button text="Entrar" />
      </div>
    );
  }
}

export default Login;
