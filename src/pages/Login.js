import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  } // handleChange padrão para alterar o state dinamicamente

  handleSubmit() {
    const { email, password } = this.state;
    console.log(email, password);
  }

  render() {
    /** fonte da variavel 'validarEmail':
     * https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
     */
    const validarEmail = /\S+@\S+\.\S+/;
    const { email, password } = this.state;
    const sisePassword = 6; // no magic numbers =(
    // console.log(disabled);
    return (
      <fieldset>
        <label htmlFor="email">
          <input
            placeholder="Insira seu email"
            id="email"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          Email
        </label>
        <label htmlFor="password">
          <input
            placeholder="Insira sua senha"
            id="password"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          Senha
        </label>
        <button
          type="submit"
          onClick={ this.handleSubmit }
          disabled={
            !(validarEmail.test(email) && password.length >= sisePassword)
          }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;

// botão de enviar desabilitado: caso o email e não sejam como o regex e > que 6 ele não habilita. O .test é um método do regex.
