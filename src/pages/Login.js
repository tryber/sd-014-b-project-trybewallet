import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmailAddress } from '../actions';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  verifyLogin() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_PASSWORD_LENGTH = 6;
    return emailRegex.test(email) && password.length >= MIN_PASSWORD_LENGTH;
  }

  render() {
    const { email, password } = this.state;
    const { sendEmail } = this.props;
    const { handleChange, verifyLogin } = this;
    return (
      <form action="">
        <div className="login">Login</div>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ (e) => handleChange(e) }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ (e) => handleChange(e) }
        />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => sendEmail(email) }
            disabled={ !verifyLogin() }
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
