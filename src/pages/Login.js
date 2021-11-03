import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { history, userEmailLogin } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    userEmailLogin(email);
  }

  render() {
    const { email, password } = this.state;

    const validationEmailLogin = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      return regexEmail.test(email);
    };

    const caracterPass = 6;
    const validationPassWord = password.length >= caracterPass;

    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            id="input-email"
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Password:
          <input
            id="input-password"
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !(validationEmailLogin() && validationPassWord) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userEmailLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmailLogin: (email) => dispatch(user(email)),
});

export default connect(null, mapDispatchToProps)(Login);
