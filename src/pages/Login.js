import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  render() {
    const { email, password } = this.state;
    const { emailDispacth, history } = this.props;
    const minLength = 6;
    const disabled = password.length >= minLength && this.isEmailValid(email);
    return (
      <div>
        Login
        <input
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          name="password"
          onChange={ this.handleChange }
          data-testid="password-input"
          type="password"
        />
        <button
          type="button"
          disabled={ !disabled }
          onClick={ () => {
            emailDispacth(this.state);
            history.push('/carteira');
          } }
        >
          Entrar

        </button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispacth: (state) => dispatch(getEmail(state)) });

Login.propTypes = {
  emailDispacth: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
