import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { user } from '../actions/index';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { history, loginUserEmail } = this.props;
    const { email } = this.state;
    loginUserEmail(email);
    history.push('/carteira');
  }

  isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  };

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const minPsswdLength = 6;
    const disabled = password.length >= minPsswdLength && this.isEmailValid(email);
    return (
      <section className="container-form">
        <div className="field-container">
          <input
            name="email"
            value={ email }
            className="input-field"
            data-testid="email-input"
            placeholder="Insira seu e-mail"
            onChange={ this.handleInput }
            required
            type="text"
          />
          <input
            name="password"
            className="input-field"
            value={ password }
            data-testid="password-input"
            required
            onChange={ this.handleInput }
            placeholder="Insira sua senha"
            type="text"
          />
          <button
            className="ui animated button"
            disabled={ !disabled }
            onClick={ this.handleClick }
            type="button"
          >
            <div
              className="visible content"
            >
              Entrar
            </div>
            <div
              className="hidden content"
            >
              <i aria-hidden="true" className="arrow right icon" />
            </div>
          </button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUserEmail: (data) => dispatch(user(data)),
});

Login.propTypes = {
  loginUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
