import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestLogin } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.handleDisabled());
  }

  handleEmailLoginToGlobalStore() {
    const { email } = this.state;
    const { emailLoginAction } = this.props;
    emailLoginAction(email);
  }

  // Referência a thread no slack do tryber Michael Caxias

  handleDisabled() {
    const { email, password } = this.state;
    const regexEmail = /(.*)@(.*).com/;
    const passwordMinLength = 6;

    if (regexEmail.test(email) && password.length >= passwordMinLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Login
          <input
            type="email"
            data-testid="email-input"
            name="email"
            placeholder="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleEmailLoginToGlobalStore() }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailLoginAction: (payload) => dispatch(requestLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  emailLoginAction: PropTypes.func.isRequired,
};
