import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <fieldset>
          <Input
            label="Email: "
            type="text"
            name="email"
            datatestid="email-input"
          />
          <Input
            label="Senha: "
            type="text"
            name="senha"
            datatestid="email-input"
          />
        </fieldset>
      </div>
    );
  }
}

export default Login;
