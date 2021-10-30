import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addDataLogin } from '../actions/user';
import Button from '../components/form/Button';

const MIN_LENGTH_PASSWORDS = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setDataLoginStore } = this.props;
    const { email } = this.state;
    setDataLoginStore({ email });
    this.setState((state) => ({
      ...state,
      logged: true,
    }));
  }

  checkEmail() {
    // Lógica da validação de email https://ui.dev/validate-email-address-javascript/
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  }

  checkPassword() {
    const { password } = this.state;
    return password.length >= MIN_LENGTH_PASSWORDS;
  }

  checkDataLogin() {
    return this.checkEmail() && this.checkPassword();
  }

  render() {
    const { email, password, logged } = this.state;
    return (
      logged ? <Redirect to="/carteira" />
        : (
          <form>
            <label htmlFor="email-input">
              <input
                id="email-input"
                data-testid="email-input"
                type="email"
                placeholder="email@email.com"
                name="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password-input">
              <input
                id="password-input"
                data-testid="password-input"
                type="password"
                placeholder="Senha"
                name="password"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            <Button
              type="submit"
              nameLabel="Entrar"
              onClick={ this.handleClick }
              disabled={ !this.checkDataLogin() }
            />
          </form>
        )
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDataLoginStore: (dataLogin) => dispatch(addDataLogin(dataLogin)),
});

Login.propTypes = {
  setDataLoginStore: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
