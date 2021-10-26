import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { emailSubmit } from '../actions/submitEmail';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValid: false,
      email: '',
      passwordValid: false,
      password: '',
      button: true,
      submited: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.passwordOK = this.passwordOK.bind(this);
    this.emailOK = this.emailOK.bind(this);
    this.buttonFunc = this.buttonFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.emailOK = this.emailOK.bind(this);
  }

  // Aproveitando a dica do Gustavo Santana no slack

  emailOK() {
    this.isEmailValid = (emailinput) => {
      const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const result = regexEmail.test(emailinput);
      if (result === true) {
        this.setState({
          emailValid: true,
        });
      } else if (result === false) {
        this.setState({ emailValid: false });
      }
    };

    const { email } = this.state;
    this.isEmailValid(email);
  }

  passwordOK() {
    const { password } = this.state;
    const vlPss = 6;
    if (password.length >= vlPss) {
      this.setState({ passwordValid: true }, this.buttonFunc);
    } else if (password.length <= vlPss) {
      this.setState({ passwordValid: false }, this.buttonFunc);
    }
  }

  buttonFunc() {
    const { passwordValid, emailValid } = this.state;
    if (passwordValid && emailValid === true) {
      this.setState({ button: false });
    } else if (passwordValid === false || emailValid === false) {
      this.setState({ button: true });
    }
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value },
    this.passwordOK);
    this.emailOK();
  }

  handleSubmit() {
    const { SubmitEmail } = this.props;
    const { email } = this.state;
    SubmitEmail(email);
    this.setState({ submited: true });
  }

  render() {
    const { button, submited } = this.state;
    if (submited) return <Redirect to="/carteira" />;
    return (
      <form>
        <label htmlFor="email">

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ button }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  SubmitEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  SubmitEmail: (email) => (dispatch(emailSubmit(email))),
});

export default connect(null, mapDispatchToProps)(Login);
