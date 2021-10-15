import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const sizePassword = 6;
    const validatLogin = (regexEmail && password.length >= sizePassword);
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Senha"
        />
        <button
          type="button"
          disabled={ !validatLogin }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
