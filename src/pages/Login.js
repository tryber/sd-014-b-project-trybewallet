import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmailAddress } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmailAndLogin = this.validateEmailAndLogin.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  validateEmailAndLogin() {
    const { email, password } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const MIN_PASSWORD_LENGTH = 6;

    return emailRegex.test(email) && password.length >= MIN_PASSWORD_LENGTH;
  }

  render() {
    const { handleChange, validateEmailAndLogin } = this;
    const { email, password } = this.state;
    const { sendEmail } = this.props;

    return (
      <form>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ (event) => handleChange(event) }
        />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ (event) => handleChange(event) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validateEmailAndLogin() }
            onClick={ () => sendEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (emailAddress) => dispatch(addEmailAddress(emailAddress)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
