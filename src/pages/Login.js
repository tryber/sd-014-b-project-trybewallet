import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitLogin } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      statusBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const MIN_CHARACTERES_IN_PASSWORD = 5;

    this.setState({
      [name]: value,
    });

    const { email, password } = this.state;
    // ref: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const regexEmail = /\S+@\S+\.\S+/.test(email);
    const validPassword = password.length >= MIN_CHARACTERES_IN_PASSWORD;
    if (regexEmail && validPassword) {
      this.setState({ statusBtn: false });
    }
  }

  handleClick() {
    const { history, submitEmail } = this.props;
    const { email } = this.state;
    submitEmail(email);
    console.log(history);
    /*
      Enzo Thome me ajudou a resolver um bug ao fazer o redirecionamento para '/carteira'
       Ref: https://github.com/tryber/sd-014-b-project-trybewallet/pull/41/files
    */
    history.push('/carteira');
  }

  render() {
    const { email, password, statusBtn } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Login:
          <br />
          <input
            type="email"
            name="email"
            id="email-input"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha:
          <br />
          <input
            type="password"
            name="password"
            id="password-input"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ statusBtn }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

// Ref: https://github.com/MoisesSantana/Revisao-Bloco-15/blob/for-students-b/src/components/LoginForm.jsx
const mapDispatchToprops = (dispatch) => ({
  submitEmail: (email) => dispatch(submitLogin(email)),
});

Login.propTypes = {
  submitEmail: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToprops)(Login);
