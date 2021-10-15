import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
    this.validado = this.validado.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  submitEmail(e) {
    e.preventDefault();
    this.setState((state) => ({
      email: state.email,
    }));
    // render('/carteira') depois que salvar o email do state tenh que rendirecionar para rota /carteira.
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  isPasswordValid(password) {
    const PASS_LENGTH = 5;
    const validacaoPassword = password.length > PASS_LENGTH;
    return validacaoPassword;
  }

  validado() {
    return (this.isEmailValid && this.isPasswordValid);
  }

  render() {
    const { email, password } = this.state;
    const validaçãoEmail = this.isEmailValid(email);
    const { logarFunction } = this.props;

    return (
      <>
        <h2>Login</h2>
        <form onSubmit={ this.submitEmail }>
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
            name="password"
            minLength="6"
            onChange={ this.handleChange }
            value={ password }
          />
          <button
            type="submit"
            onClick={ () => logarFunction(email) }
            disabled={ !validaçãoEmail }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  logarFunction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logarFunction: (state) => dispatch(emailAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
