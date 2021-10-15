import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChangeInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // referências: https://www.w3resource.com/javascript/form/email-validation.php,
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  validation(email) {
    // Não consigo entender bem como funciona, mas a expressão abaixo é utilizada para validar
    // se existem os caracters necessários para validar o email.
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // O metodo test() verifica se o email recebido por parametro está de acordo com as regras
    // que foram passadas pela const emailValidation e retorna true ou false
    return emailValidation.test(email);
  }

  render() {
    const { email, password } = this.state;
    const MIN_CARACTER = 6;
    const validation = (this.validation(email) && password.length >= MIN_CARACTER);
    return (
      <section className="container m-5">
        <h1 className="display-6">Login</h1>
        <form className="col-md-5">
          <div>
            <label className="form-label w-100" htmlFor="email">
              <input
                className="form-control"
                id="email"
                name="email"
                data-testid="email-input"
                placeholder="E-mail"
                onChange={ this.handleChangeInput }
              />
            </label>
          </div>
          <div>
            <label className="form-label w-100" htmlFor="password">
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                data-testid="password-input"
                placeholder="Senha"
                onChange={ this.handleChangeInput }
              />
            </label>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success w-100"
              disabled={ !validation }
            >
              Entrar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
