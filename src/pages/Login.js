import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      ableButton: true,
      redirection: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.validateButton();
  }

  validateButton() {
    const { password } = this.state;
    const five = 5;
    if (this.validateEmail() && password.length >= five) {
      this.setState({
        ableButton: false,
      });
    } else {
      this.setState({
        ableButton: true,
      });
    }
  }

  validateEmail() {
    const { email } = this.state;
    const splitedEmail = email.split('');
    if (email.includes('@')
    && splitedEmail[splitedEmail.length - 1] !== '@'
    && splitedEmail[splitedEmail.length - 1] !== '.') {
      return true;
    }
    return false;
  }

  handleButton() {
    const { email } = this.state;
    const { getEmailToState } = this.props;
    this.setState({
      redirection: true,
    });
    getEmailToState({ email });
  }

  render() {
    const { ableButton, email, password, redirection } = this.state;
    return (
      <form>
        { redirection && <Redirect to="/carteira" />}
        <label htmlFor="imput-email">
          <input
            id="imput-email"
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="imput-password">
          <input
            id="imput-password"
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleButton }
          disabled={ ableButton }
        >
          Entrar
        </button>
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
