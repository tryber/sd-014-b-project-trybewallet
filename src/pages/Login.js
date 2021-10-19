import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { doLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);

    this.state = {
      inputEmail: '',
      inputPassword: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  /*
    Créditos ao Michael Caxias que colocou essa função no slack e ao Gustavo Sant'Anna que aprofundou mais na explicação
    ela verifica se há uma letra, numero ou traço antes do @, então verifica se há após o arroba
    qualquer coisa que não seja um espaço vazio, depois um ponto, depois 2 a 4 caracteres depois desse ponto.
  */
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    const { dispatchEmail } = this.props;
    const minLength = 6;
    return (
      <form>
        <label htmlFor="inputEmail">
          Email:
          <input
            type="email"
            id="inputEmail"
            value={ inputEmail }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="inputPassword">
          Senha:
          <input
            type="password"
            id="inputPassword"
            value={ inputPassword }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={
              !this.isEmailValid(inputEmail) || inputPassword.length < minLength
            }
            onClick={ () => {
              dispatchEmail(inputEmail);
            } }
          >
            Entrar
          </button>
        </Link>
      </form>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (value) => dispatch(doLogin(value)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
