import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { user } from '../redux/actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
          <button
            type="button"
            disabled={ !valid }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  email: (payload) => dispatch(user(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
