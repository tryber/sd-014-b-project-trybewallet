import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      btnStatus: true,
      email: '',
      password: '',
      statusPassword: true,
      statusEmail: true,
    };
    this.updateBtnStatus = this.updateBtnStatus.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  // Função abaixo retirada de https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  updateBtnStatus() {
    const { statusPassword, statusEmail } = this.state;
    if (!statusPassword && !statusEmail) {
      this.setState({ btnStatus: false });
    } else {
      this.setState({ btnStatus: true });
    }
  }

  render() {
    const { btnStatus, email, password } = this.state;
    const minNumber = 6;
    console.log(email, password);
    return (
      <main>
        <label htmlFor="email-input">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            data-testid="email-input"
            onChange={ ({ target }) => {
              const statusEmail = this.validateEmail(target.value);
              if (statusEmail) {
                this.setState({
                  email: target.value,
                  statusEmail: false,
                }, () => this.updateBtnStatus());
              } else {
                this.setState({
                  email: target.value,
                  statusEmail: true,
                }, () => this.updateBtnStatus());
              }
            } }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="text"
            placeholder="Digite sua senha"
            data-testid="password-input"
            onChange={ ({ target }) => {
              if (target.value.length >= minNumber) {
                this.setState({
                  statusPassword: false,
                  password: target.value }, () => this.updateBtnStatus());
              } else {
                this.setState({
                  statusPassword: true,
                  password: target.value }, () => this.updateBtnStatus());
              }
            } }
          />
        </label>
        <button type="button" disabled={ btnStatus }>Entrar</button>
      </main>
    );
  }
}

export default Login;
