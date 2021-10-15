import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions/index';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userEmail: '',
      userPassword: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { history, dispatchValues } = this.props;
    dispatchValues(this.state);
    history.push('/carteira');
  }

  handleDisabled() {
    const { userEmail, userPassword } = this.state;
    // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    const LENGTH_PASSWORD = 6;
    const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPassaword = userPassword.length < LENGTH_PASSWORD;

    return !checkEmail.test(userEmail) || checkPassaword;
  }

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <div className="center">
        <form className="shadow p-3 mb-5 bg-body rounded">
          <img
            src="https://www.clipartmax.com/png/full/141-1410805_%C2%A0-stock-photography.png"
            alt="wallet"
          />
          <input
            className="form-control"
            type="email"
            name="userEmail"
            data-testid="email-input"
            value={ userEmail }
            onChange={ this.handleChange }
            placeholder="Digite seu Email"
          />
          <input
            className="form-control"
            type="password"
            name="userPassword"
            data-testid="password-input"
            placeholder="Digite sua Senha"
            value={ userPassword }
            onChange={ this.handleChange }
            autoComplete="on"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={ () => this.handleSubmit() }
            disabled={ this.handleDisabled() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchValues: (state) => dispatch(userLogin(state)) });
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchValues: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
