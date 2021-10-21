import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setLoginValue } from '../actions';
import Button from '../components/Button';

const MIN_CHARACTER = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // função genérica para input - exercício do formúlario
  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // função baseada no exercício do fórmulario
  handleClick() {
    const { history, dispatchEmailValue } = this.props;
    dispatchEmailValue(this.state);
    history.push('/carteira');
  }

  render() {
    // validação de e-mail construída com ajuda do colega Vitor Silva
    const { email, password } = this.state;
    const emailValidation = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

    return (
      <div>
        <h1>Login</h1>
        <div>
          <input
            data-testid="email-input"
            type="email"
            label="email"
            placeholder="Informe seu e-mail"
            name="email"
            value={ email }
            onChange={ this.handleInputChange }
            required
          />
          <input
            data-testid="password-input"
            type="password"
            label="password"
            placeholder="Informe sua senha"
            minLength={ MIN_CHARACTER }
            name="password"
            value={ password }
            onChange={ this.handleInputChange }
            required
          />
          <Button
            disabled={ !emailValidation || password.length < MIN_CHARACTER }
            onClick={ this.handleClick }
            label="Entrar"
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchEmailValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailValue: (emailValue) => dispatch(setLoginValue(emailValue)),
});

export default connect(null, mapDispatchToProps)(Login);
