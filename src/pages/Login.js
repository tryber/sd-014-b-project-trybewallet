import React from 'react';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState = ({
      [name]: value,
    });
  }

  isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  };

  render() {
    const { email, password } = this.state;
    const minPsswdLength = 6;
    const disabled = password.length >= minPsswdLength && isEmailValid(email);
    return (
      <section className="container-form">
        <div className="field-container">
          <input
            className="input-field"
            data-testid="email-input"
            placeholder="Insira seu e-mail"
            onChange={ () => handleInput({ target }) }
            required
            type="text"
            value={ email }
          />
          <input
            className="input-field"
            data-testid="password-input"
            value={ password }
            placeholder="Insira sua senha"
            type="text"
          />
          <input
            className="input-field"
            disabled={ !disabled }
            // onClick={ handleClick }
            type="button"
            value="Entrar"
          />
        </div>
      </section>
    );
  }
}

export default Login;
