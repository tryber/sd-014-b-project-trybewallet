import React from 'react';
import InputPattern from '../components/InputPattern';

class Login extends React.Component {
  constructor() {
    super();
    this.setState = {
      email: '',
      senha: '',
    };
  }

  render() {
    return (
      <section>
        <InputPattern
          name="email"
          description="Email: "
          type="text"
          data-testid="email-input"
        />
        <InputPattern
          name="senha"
          description="Senha: "
          type="text"
          data-testid="password-input"
        />
        <button data-testid="login" type="button">
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
