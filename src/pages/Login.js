import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      checkPassword: false,
      checkEmail: false,
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changePassword(event) {
    const SIX = 6;
    this.setState({
      password: event.target.value,
    });
    if (event.target.value.length >= SIX) {
      this.setState({
        checkPassword: true,
      });
      return;
    }
    this.setState({ checkPassword: false });
  }

  changeEmail(event) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.setState({
      email: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ checkEmail: true });
      return;
    }
    this.setState({ checkEmail: false });
  }

  render() {
    const { checkEmail, checkPassword, email, password } = this.state;
    const { onLogin } = this.props;
    return (
      <div>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="email-input"
            id="email"
            onChange={ this.changeEmail }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            id="senha"
            onChange={ this.changePassword }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !checkEmail || !checkPassword }
            onClick={ () => onLogin({ email, password }) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    onLogin: (payload) => dispatch(userAction(payload)),
  };
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Login);
