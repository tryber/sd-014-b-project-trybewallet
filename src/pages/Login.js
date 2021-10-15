import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.isEmailValid = this.isEmailValid.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitEmail = this.submitEmail.bind(this);

    this.state = {
      email: '',
      passwordLength: 0,
    };
  }

  // Função de validação de email
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email); // retorna TRUE se regexEmail for válido
  }

  // Funções para setar o email e o tamanho da senha do usuário do estado local
  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      passwordLength: event.target.value.length,
    });
  }

  // Função para mandar o email para o estado global
  submitEmail() {
    const { dispatchEmail } = this.props;
    dispatchEmail(this.state);
  }

  render() {
    const { email, passwordLength } = this.state;
    const MIN_PASSWORD_LENGTH = 6;

    return (
      <div>
        <input type="email" data-testid="email-input" onChange={ this.handleEmail } />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handlePassword }
        />
        <Link to="/carteira">
          <button
            type="button"
            // Se as duas condições retornarem false, disabled === false;
            disabled={ !this.isEmailValid(email) || passwordLength < MIN_PASSWORD_LENGTH }
            onClick={ this.submitEmail }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (emailFromLocalState) => dispatch(setUserEmail(emailFromLocalState)),
});

export default connect(null, mapDispatchToProps)(Login);
