import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordValid: true,
      emailValid: true,
      userEmail: '',
    };
  }

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleEmail = ({ target }) => {
    if (this.validateEmail(target.value)) {
      this.setState({
        emailValid: false,
        userEmail: target.value,
      });
    } else {
      this.setState({
        emailValid: true,
      });
    }
  }

  submit = () => {
    const { submitUser, history } = this.props;
    const { userEmail } = this.state;

    submitUser(userEmail);
    history.push('/carteira');
  }

  handlePassword = ({ target }) => {
    const MAGIC_NUMBER = 6;
    if (target.value.length >= MAGIC_NUMBER) {
      this.setState({
        passwordValid: false,
      });
    } else {
      this.setState({
        passwordValid: true,
      });
    }
  }

  render() {
    const { passwordValid, emailValid } = this.state;
    let disabledButton = true;

    if (!(passwordValid || emailValid)) {
      disabledButton = false;
    }
    return (
      <div>
        <input type="email" onChange={ this.handleEmail } data-testid="email-input" />
        <input
          type="password"
          onChange={ this.handlePassword }
          data-testid="password-input"
        />
        <button
          type="button"
          onClick={ this.submit }
          disabled={ disabledButton }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitUser: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  submitUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
