import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin() {
    const { dispatchValue } = this.props;
    dispatchValue(this.state);
  }

  handleChange({ target }) {
    const { name } = target;
    const valor = target.value;

    this.setState({
      [name]: valor,
    });
  }

  validLogin(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  render() {
    const { email, password } = this.state;
    const n = 6;
    const valid = password.length >= n && this.validLogin(email);
    return (
      <div className="form">
        <h1>Trybe Wallet</h1>
        <form className="form-login">
          <label className="input" htmlFor="email-input">
            E-mail
            <input
              type="email"
              id="email-input"
              data-testid="email-input"
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label className="input" htmlFor="password-input">
            Senha
            <input
              type="password"
              id="password-input"
              data-testid="password-input"
              value={ password }
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !valid }
              onClick={ this.onSubmitLogin }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (login) => dispatch(user(login)),
});

export default connect(null, mapDispatchToProps)(Login);
