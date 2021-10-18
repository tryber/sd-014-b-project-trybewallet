import React from 'react';

/*
const INITIAL_STATE = {
  user = {
    email: '',
  },
  wallet = {
    valor: 0,
    moeda: '',
    metodoDePagamento: '',
    tag: '',
    descricao: '',
  },
}

guardar email e coloca-lo no header

*/

class Login extends React.Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      email: '',
      senha: '',
      loginHabilitado: false,
    };
  }

  handleTextAreaChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    const quatro = 4;
    const re = /\S+@\S+\.\S+/; /* usei o site: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ */
    if (re.test(email) && senha.length > quatro) {
      this.setState({
        loginHabilitado: true,
      });
    }
  }

  render() {
    const { loginHabilitado, email, senha } = this.state;
    return (
      <div>

        <label htmlFor="email">
          Email:
          <input
            name="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleTextAreaChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            name="senha"
            id="senha"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleTextAreaChange }
          />
        </label>

        <button
          disabled={ loginHabilitado === false }
          type="button"
        >
          Entrar
        </button>

      </div>

    );
  }
}

export default Login;
