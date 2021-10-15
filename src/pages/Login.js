import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input
          id="email-input"
          type="text"
          name="email"
          placeholder="exemple@email.com"
        />
        <Input
          id="password-input"
          type="password"
          name="senha"
          placeholder="Digite sua senha"
        />
        <Button id="button-login" label="Entrar" />
      </div>
    );
  }
}

export default Login;
