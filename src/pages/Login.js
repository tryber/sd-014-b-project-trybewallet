import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    // Link de onde encontrei o Regex para a validação do email:
    // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passMinLength = 6;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleInputs }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleInputs }
          />
          <input
            type="button"
            value="Entrar"
            disabled={
              !email.match(valid) || password.length < passMinLength
            }
            // onClick={}
          />
        </form>
      </div>
    );
  }
}

export default Login;
