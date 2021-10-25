import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CHECK_EMAIL } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toLogin = this.toLogin.bind(this);
  }

  validateEmail() {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/.test(email);
    const seis = 6;
    const correctPassword = password.length >= seis;
    return !regex || !correctPassword;
  } // referência: https://trybecourse.slack.com/archives/C023YHXAEGM/p1634586091402700

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  } // referência: https://github.com/tryber/sd-014-b-project-trybewallet/pull/86/

  toLogin() {
    const { dispatchEmail, history } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          disabled={ this.validateEmail() }
          onClick={ this.toLogin }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (state) => dispatch(CHECK_EMAIL(state)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
