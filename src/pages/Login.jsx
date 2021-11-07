import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as loginActions from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  handleSubmit() {
    const { history, loginUser } = this.props;
    const { email } = this.state;
    loginUser(email);
    history.push('/carteira');
  }

  formValidation() {
    const { email, password } = this.state;
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // crédito: Thomas Ferreira;
    const emailTest = emailValidation.test(email);
    const MIN_LENGTH = 6;
    const passwordTest = password.length >= MIN_LENGTH;
    return emailTest && passwordTest;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          E-Mail:
          <input
            value={ email }
            type="email"
            data-testid="email-input"
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            type="password"
            data-testid="password-input"
            id="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !this.formValidation() }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email) => dispatch(loginActions.login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
