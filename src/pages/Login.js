import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    const { email } = this.state;
    const { componentDispatch, history } = this.props;
    componentDispatch(email);
    history.push('/carteira');
  }

  handleDisabled() {
    const { email, password } = this.state;
    const PASSWORD_MINIMUM_CHARACTERS = 6;
    const checkEmail = email.includes('@');
    const emailAdd = email.includes('.com');

    if (password.length >= PASSWORD_MINIMUM_CHARACTERS && checkEmail && emailAdd) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.handleDisabled());
  }

  render() {
    const { email, disabled } = this.state;
    return (
      <form>
        <label htmlFor="email-login-input">
          Email
          <input
            type="email"
            id="email-login-input"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        Password
        <label htmlFor="password-login-input">
          <input
            type="password"
            id="password-login-input"
            data-testid="password-input"
            onChange={ this.handleChange }
            name="password"
          />
        </label>
        <button
          id="btn-login"
          type="button"
          disabled={ disabled }
          onClick={ () => this.onClickBtn() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  componentDispatch: (state) => dispatch(getEmail(state)),
});

Login.propTypes = {
  componentDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
