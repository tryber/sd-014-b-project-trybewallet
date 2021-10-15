import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  validate() {
    const { email, password } = this.state;
    const magicNumber = 5;
    if ((password.length >= magicNumber) && (this.isEmailValid(email))) {
      this.setState({
        disabled: false, 
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
    this.validate();
  }

  handleClick() {
    const { history, emailDispatch } = this.props;
    emailDispatch(this.state);
    history.push('/carteira');
  }

  render() {
    const { disabled, email, password } = this.state;
    return (
      <div>
        Login
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            id="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(userAction(state)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
