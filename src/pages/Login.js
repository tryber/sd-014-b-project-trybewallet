import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoginValue } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }
  /* sugestão feita pelo Michael Caxias nesta thread: https://trybecourse.slack.com/archives/C023YHXAEGM/p1634319081263300 */

  validateInputs() {
    const { email, password } = this.state;
    const passwordValid = 5;
    if ((password.length >= passwordValid) && (this.isEmailValid(email))) {
      this.setState({
        disableButton: false,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
    this.validateInputs();
  }

  submitLogin() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password, disableButton } = this.state;
    return (
      <section>
        <input
          type="email"
          id="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Digite seu Email"
          data-testid="email-input"

        />
        <input
          type="password"
          id="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Digite sua Senha"
          data-testid="password-input"
        />

        <button
          type="button"
          disabled={ disableButton }
          onClick={ this.submitLogin }
        >
          Entrar

        </button>

      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (payload) => dispatch(setLoginValue(payload)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
