import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.changeStateAndInputValue = this.changeStateAndInputValue.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.renderRedirectTag = this.renderRedirectTag.bind(this);
  }

  changeStateAndInputValue({ target: { value } }, id) {
    this.setState({ [id]: value }, () => this.formValidation());
  }

  formValidation() {
    const { email, password } = this.state;
    const emailIsValid = /^\S+@\S+\.\S+$/.test(email);
    const passwordIsValid = /^[a-zA-Z0-9]{6,}$/.test(password);

    this.setState({ disabled: !(emailIsValid && passwordIsValid) });
  }

  renderRedirectTag() {
    this.setState({ redirect: true });
  }

  render() {
    const { state: { email, password, disabled, redirect },
      changeStateAndInputValue, renderRedirectTag } = this;

    if (redirect) { return <Redirect to="/carteira" />; }

    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
            value={ email }
            onChange={ (event) => changeStateAndInputValue(event, 'email') }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            id="password"
            placeholder="Insira sua senha"
            value={ password }
            onChange={ (event) => changeStateAndInputValue(event, 'password') }
          />
        </label>
        <button type="button" disabled={ disabled } onClick={ renderRedirectTag }>
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
