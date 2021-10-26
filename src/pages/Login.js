import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.changeStateInput = this.changeStateInput.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.redirectTag = this.redirectTag.bind(this);
  }

  changeStateInput({ target: { value } }, id) {
    this.setState({ [id]: value }, () => this.formValidation());
  }

  // Documentação consultada https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  formValidation() {
    const { email, password } = this.state;
    const emailValidation = /^\S+@\S+\.\S+$/.test(email);
    const passwordValidation = /^[a-zA-Z0-9]{6,}$/.test(password);

    this.setState({ disabled: !(emailValidation && passwordValidation) });
  }

  redirectTag() {
    this.setState({ redirect: true });
  }

  render() {
    const { state: { email, password, disabled, redirect },
      changeStateInput, redirectTag,
      props: { dispatchUserInfo } } = this;

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
            onChange={ (event) => changeStateInput(event, 'email') }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            id="password"
            placeholder="Insira sua senha"
            value={ password }
            onChange={ (event) => changeStateInput(event, 'password') }
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => { redirectTag(); dispatchUserInfo(this.state); } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchUserInfo: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: (userInfo) => dispatch(getUserInfo(userInfo)) });

export default connect(null, mapDispatchToProps)(Login);
