import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserAction } from '../actions';

class InputLoggin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailPasswordIsValid = this.emailPasswordIsValid.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value }, () => this.emailPasswordIsValid());
  }

  emailPasswordIsValid() {
    const { password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    if (this.validaEmail() && password.length >= MIN_PASSWORD_LENGTH) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  validaEmail() {
    const { email } = this.state;
    const emailSplit = email.split('');
    if (email.includes('@')
    && emailSplit[emailSplit.length - 1] !== '@'
    && emailSplit[emailSplit.length - 1] !== '.') {
      return true;
    }
    return false;
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    const { sendEmailToGlobalState } = this.props;

    return (
      <form>
        <input
          data-testid="email-input"
          type="text"
          // name="email"
          id="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          // name="password"
          id="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ () => sendEmailToGlobalState(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmailToGlobalState: (email) => dispatch(selectUserAction(email)),
});

InputLoggin.propTypes = {
  sendEmailToGlobalState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(InputLoggin);
