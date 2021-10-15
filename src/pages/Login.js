import React from 'react';
import { connect } from 'react-redux';
import emailAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.logarFunction = this.logarFunction.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  logarFunction() {
    this.setState((state) => ({
      email: state.email,
    }));
    // render('/carteira') depois que salvar o email do state tenh que rendirecionar para rota /carteira.
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const validaçãoEmail = this.isEmailValid(email);
    return (
      <>
        <h2>Login</h2>
        <input
          data-testid="email-input"
          type="text"
          required
          name="email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          data-testid="password-input"
          type="password"
          minLength="6"
          name="password"
          required
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          onClick={ this.logarFunction }
          disabled={ !validaçãoEmail }
        >
          Entrar
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(emailAction(state)) });

export default connect(null, mapDispatchToProps)(Login);
