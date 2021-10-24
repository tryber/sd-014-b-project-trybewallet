import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputValid = this.inputValid.bind(this);
    this.getLogin = this.getLogin.bind(this);
  }

  getLogin() {
    const { email } = this.state;
    const { history, dispatchValue } = this.props;

    dispatchValue(email);
    history.push('/carteira');
  }
  // Req. 03 com ajuda do colega Denis Espanhol
  // https://github.com/tryber/sd-014-b-project-trybewallet/pull/81

  inputValid() {
    const { email, password } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // Usei essa Theread para verificar email https://trybecourse.slack.com/archives/C023YHXAEGM/p1634586091402700

    const SEIS = 6;
    const correctPassword = password.length >= SEIS;

    return !regex || !correctPassword;
    // usei esse Repo de referência para esta função
    // https://github.com/tryber/sd-014-b-project-trybewallet/pull/86/
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <section className="login">
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            id="email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            id="password"
          />
        </label>

        <button
          type="button"
          disabled={ this.inputValid() }
          onClick={ this.getLogin }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (email) => dispatch(validUser(email)),
});

Login.propTypes = {
  dispatchValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
