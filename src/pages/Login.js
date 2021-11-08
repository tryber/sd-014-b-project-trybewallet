import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      verify: true,
    };
    this.uptadeState = this.uptadeState.bind(this);
    this.submit = this.submit.bind(this);
    this.verify = this.verify.bind(this);
  }

  uptadeState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.verify();
  }

  // https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469
  checkEmail(email) {
    const check = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return check.test(email);
  }

  verify() {
    const { email, senha } = this.state;
    const min = 5;
    if (this.checkEmail(email) && senha.length >= min) {
      this.setState({ verify: false });
    } else { this.setState({ verify: true }); }
  }

  submit() {
    const { email } = this.state;
    const { history, setEmail } = this.props;
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha, verify } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.uptadeState }
            value={ email }
            name="email"
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.uptadeState }
            value={ senha }
            name="senha"
          />
          <button
            type="button"
            disabled={ verify }
            onClick={ this.submit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  setEmail: PropTypes.func.isRequired,
};
