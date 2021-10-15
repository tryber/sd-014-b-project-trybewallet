import React from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../actions';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handleSubmit() {
    const { history, sendEmail } = this.props;
    sendEmail(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const SIX = 6;
    const disabled = password.length >= SIX && this.isEmailValid(email);
    return (
      <div>
        Login
        <input
          data-testid="email-input"
          name="email"
          value={ email }
          type="text"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          value={ password }
          type="password"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !disabled }
          onClick={ this.handleSubmit }
        >
          Entrar

        </button>

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (param) => dispatch(setEmail(param)),
});

export default connect(null, mapDispatchToProps)(Login);
