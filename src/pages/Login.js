import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { salvaEmailLogin } from '../actions/index';
// import requestMoedas from '../services/requestAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      senha: '',
      loginHabilitado: false,
      mudarRota: false,
    };
  }

  handleTextAreaChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    const quatro = 4;
    const re = /\S+@\S+\.\S+/; /* usei o site: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ */
    if (re.test(email) && senha.length > quatro) {
      this.setState({
        loginHabilitado: true,
      });
    }
  }

  handleSubmit() {
    const { salvaEmail } = this.props;
    const { email } = this.state;
    salvaEmail(email);
    this.setState({ mudarRota: true });
  }

  render() {
    const { loginHabilitado, email, senha, mudarRota } = this.state;
    if (mudarRota) return <Redirect to="/carteira" />;

    return (
      <div>

        <label htmlFor="email">
          Email:
          <input
            name="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleTextAreaChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            name="senha"
            id="senha"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleTextAreaChange }
          />
        </label>

        <button
          disabled={ loginHabilitado === false }
          type="button"
          onClick={ () => this.handleSubmit() }
        >
          Entrar
        </button>

      </div>

    );
  }
}

Login.propTypes = {
  salvaEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  salvaEmail: (userInf) => (dispatch(salvaEmailLogin(userInf))),
});

export default connect(null, mapDispatchToProps)(Login);

/* dispatchSetValue, quando quer atualizar o stado */
