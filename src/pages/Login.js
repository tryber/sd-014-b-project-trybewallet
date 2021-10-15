import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validacaoEmail = this.validacaoEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  validacaoEmail({ target: { value } }) {
    // Pesquisa de validação no site https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785
    const negativeLength = -1;
    if (value === ''
        || value.indexOf('@') === negativeLength
        || value.indexOf('.') === negativeLength) {
      document.getElementById('msgemail')
        .innerHTML = '<font color=\'red\'>digite um e-mail válido </font>';
    } else {
      document.getElementById('senha').disabled = false;
    }
  }

  handleSubmit() {
    const
  }

  render() {
    const { email, senha } = this.state;
    const minLength = 6;
    let btnDesabilitado = true;
    if (senha.length >= minLength) {
      btnDesabilitado = false;
    } else {
      btnDesabilitado = true;
    }

    return (
      <main>
        <section>
          <p>TRYBE WALLET</p>
          <div>
            <div>
              <input
                data-testid="email-input"
                name="email"
                type="email"
                value={ email }
                placeholder="Email"
                onBlur={ this.validacaoEmail }
                onChange={ this.handleChange }
              />
              <span className="span-msg" id="msgemail" />
            </div>
            <input
              data-testid="password-input"
              id="senha"
              name="senha"
              type="password"
              value={ senha }
              placeholder="Senha"
              onChange={ this.handleChange }
              disabled
            />
            <button
              id="btnSubmit"
              type="submit"
              onClick={ this.handleSubmit }
              disabled={ btnDesabilitado }
            >
              Entrar
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
