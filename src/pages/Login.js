import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history, loginUserEmail } = this.props;
    const { email } = this.state;
    loginUserEmail(email);
    history.push('/carteira');
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const disabled = password.length >= passwordLength && this.isEmailValid(email);
    return (
      <section>
        <div>
          <input
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleInput }
            required
            type="email"
          />
          <input
            name="password"
            value={ password }
            data-testid="password-input"
            required
            onChange={ this.handleInput }
            type="password"
          />
          <button
            type="button"
            disabled={ !disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUserEmail: (data) => dispatch(loginAction(data)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginUserEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
