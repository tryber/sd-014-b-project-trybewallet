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
      butttonDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.submitEmail = this.submitEmail.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    // this.isPasswordValid = this.isPasswordValid.bind(this);
    this.validado = this.validado.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  // submitEmail(e) {
  //   e.preventDefault();
  //   this.setState((state) => ({
  //     email: state.email,
  //   }));
  //   // render('/carteira') depois que salvar o email do state tenh que rendirecionar para rota /carteira.
  // }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  validado() {
    const { email, password } = this.state;
    const PASS_LENGTH = 5;
    if ((password.length >= PASS_LENGTH) && (this.isEmailValid(email))) {
      this.setState({
        butttonDisable: false,
      });
    }
  }

  render() {
    const { email, password, butttonDisable } = this.state;
    // const validaçãoEmail = this.isEmailValid(email);
    const { logarFunction } = this.props;

    return (
      <>
        <h2>Login</h2>
        <input
          placeholder="Seu email"
          data-testid="email-input"
          type="text"
          required
          name="email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          placeholder="Digite sua senha"
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          onClick={ () => logarFunction(email) }
          disabled={ butttonDisable }
        >
          Entrar
        </button>
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
