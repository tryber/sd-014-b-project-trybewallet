import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storeEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Feito com a ajuda do grupo 6 Turma 14B do projeto App de Receitas

  emailCheck(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const passLenght = 6;
    const validEmail = this.emailCheck(email);
    return (
      <section>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          value="Entrar"
          disabled={ !((password.length >= passLenght) && (validEmail)) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(storeEmail(value)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
