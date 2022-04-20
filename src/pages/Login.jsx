import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { loginSaveEmail } from '../actions';
import './styles/Login.css';
import imgLogin from '../images/img1.png';

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
      <div className="login-container">
        <div className="img-login">
          <img src={ imgLogin } alt="login" />
        </div>
        <div className="login">
        <h1><i className="fas fa-wallet" /> Trybe Wallet</h1>
          <form>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                data-testid="email-input"
                onChange={ (e) => this.handleChange(e) }
              />
              <i className="far fa-envelope icon" />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                data-testid="password-input"
                onChange={ (e) => this.handleChange(e) }
              />
              <i className="fas fa-lock icon" />
            </label>
            <button
              type="submit"
              disabled={ !(reg.test(email)) || password.length < MIN_CARACTERES }
              onClick={ (e) => this.saveEmailInLogin(e, email) }
            >
              Entrar
            </button>
          </form>
        </div>
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
