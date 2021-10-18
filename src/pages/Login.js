import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.inputValidation = this.inputValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Inicio da Referência
  // Função abaixo criada a partir do artigo lido no site https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  inputValidation() {
    const { email, password } = this.state;
    const emailInputValidation = /\S+@\S+\.\S+/;
    const passwordInputMinLenght = 6;
    const passwordInputValidation = password.length >= passwordInputMinLenght;
    return !emailInputValidation.test(email) || !passwordInputValidation;
  }
  // Fim da Referência

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              placeholder="Email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              placeholder="Senha"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button disabled={ this.inputValidation() } type="button">Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
