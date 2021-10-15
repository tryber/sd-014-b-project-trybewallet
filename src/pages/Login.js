import PropTypes from 'prop-types';
import React from 'react';
import validator from 'validator';
import { connect } from 'react-redux';
import { login as loginEvent } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { disabled: true, password: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.changeButtonStatus = this.changeButtonStatus.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.changeButtonStatus();
  }

  changeButtonStatus() {
    const { email, password } = this.state;
    const minSize = 5;
    const emailIsValid = validator.isEmail(email);
    if (password.length >= minSize && emailIsValid) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleLogin() {
    const { login, history } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { disabled, password, email } = this.state;
    return (
      <section>
        <input
          type="email"
          placeholder="Digite seu Email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
          name="email"
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
          name="password"
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleLogin }
        >
          Entrar

        </button>
      </section>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(loginEvent(event)),
});

export default connect(null, mapDispatchToProps)(Login);
