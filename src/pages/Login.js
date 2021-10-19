import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      ola: '',
    };

    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { getEmailToState } = this.props;
    const n = 6;
    const validEmail = /\S+@\S+\.\S+/;
    const showButton = validEmail.test(email) && password.length >= n;
    return (
      <form>
        Login
        <label htmlFor="email">
          <input
            value={ email }
            onChange={ this.handlerInput }
            type="email"
            name="email"
            data-testid="email-input"
          />
        </label>
        Password
        <label htmlFor="password">
          <input
            value={ password }
            onChange={ this.handlerInput }
            type="password"
            name="password"
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            onClick={ () => getEmailToState({ email, password }) }
            type="button"
            data-testid="login-submit-button"
            disabled={ !showButton }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmailToState: (payload) => dispatch(userAction(payload)),
});

Login.propTypes = {
  getEmailToState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
