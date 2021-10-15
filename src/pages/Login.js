import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Função generica para pegar as alterações do input e salvar no estado do component.
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Função que ao clicar no botão Entrar vai pegar o email do estado do component e disparar uma action.
  handleSubmit(event) {
    event.preventDefault();
    const { saveEmail, history } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, redirect } = this.state;
    const REGEX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/; // Validação regex
    const minPassLength = 6; // Tamanho minimo da senha no imput.
    if (redirect) { return <Redirect to="/carteira" />; } // Verifica se redirect é true e redireciona para carteira.

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange } // Quando houver alteração no input email chama a função handleChange para salvar no estado do component.
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange } // Quando houver alteração no input password chama a função handleChange para salvar no estado do component.
        />
        <button
          type="submit"
          disabled={ !REGEX_EMAIL.test(email) || password.length < minPassLength }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
