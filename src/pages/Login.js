import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Input from '../components/Input';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { dispatchSetValue, history } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const min = 5;
    const { email, senha } = this.state;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email) && senha.length >= min) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, senha, disabled } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <fieldset>
          <form>
            <Input
              label="Email: "
              type="text"
              name="email"
              datatestid="email-input"
              onChange={ this.handleChange }
              value={ email }
              id="seuEmail"
              placeholder="Seu Email"
            />
            <Input
              label="Senha: "
              type="password"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
              datatestid="password-input"
              id="suaSenha"
              placeholder="Sua senha"
            />
            <button
              type="button"
              name="enviar"
              onClick={ this.onSubmit }
              disabled={ disabled }
            >
              Entrar
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (emailvalue) => dispatch(setLogin(emailvalue)),
}
);

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
