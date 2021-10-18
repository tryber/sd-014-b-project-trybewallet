import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { loginSaveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  saveEmailInLogin(e, email) {
    e.preventDefault();
    const { login, history } = this.props;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const reg = /\S+@\S+\.\S+/;
    const MIN_CARACTERES = 6;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ (e) => this.handleChange(e) }
          />
          <button
            type="submit"
            disabled={ !(reg.test(email)) || password.length < MIN_CARACTERES }
            onClick={ (e) => this.saveEmailInLogin(e, email) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginSaveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
