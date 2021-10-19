import React from 'react';
import '../style/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputEmail: '',
      inputPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateForms = this.validateForms.bind(this);
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validateForms() {
    const { inputEmail, inputPassword } = this.state;
    const minLength = 6;
    const emailValidate = /\S+@\S+\.\S+/;
    return emailValidate.test(inputEmail) && inputPassword.length >= minLength;
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    const { validateForms } = this;

    return (
      <main id="container">
        <form>
          <h2>
            Trybe
            <p>Wallet</p>
          </h2>
          <div>
            <input
              data-testid="email-input"
              type="text"
              name="inputEmail"
              placeholder="Enter your email"
              value={ inputEmail }
              onChange={ this.handleInputChange }
            />
            <div className="underline" />
          </div>
          <div>
            <input
              data-testid="password-input"
              type="password"
              name="inputPassword"
              placeholder="Enter your password"
              value={ inputPassword }
              onChange={ this.handleInputChange }
            />
            <div className="underline" />
          </div>
          <button
            type="button"
            value="Entrar"
            className="buttonLogin"
            disabled={ !validateForms() }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;

/* links que peguei de referencia para validação do email */
/* https://pt.stackoverflow.com/questions/291974/valida%C3%A7%C3%A3o-campo-e-mails
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
https://pt.stackoverflow.com/questions/291974/valida%C3%A7%C3%A3o-campo-e-mails */
