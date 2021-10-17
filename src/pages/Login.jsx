import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { addUserEmail } from '../actions';
import './login.css';

class Login extends Component {
  constructor() {
    super();

    this.submitUser = this.submitUser.bind(this);
    this.maskEmail = this.maskEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      emailMasked: false,
      redirect: false,
    };
  }

  maskEmail() {
    const { email } = this.state;
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regEx.test(email)) return this.setState({ emailMasked: true });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.maskEmail();
    });
  }

  submitUser() {
    const { props: { userEmail }, state: { email } } = this;
    userEmail(email);
    this.setState({ redirect: true });
  }

  render() {
    const { state: { email, password, emailMasked, redirect } } = this;
    const minLengthPassword = 6;
    const disabled = emailMasked && password.length >= minLengthPassword;
    return (
      <main className="login-page">
        <header className="header-login">
          <h1 className="logo-yourwallet">
            YourWallet
          </h1>
        </header>
        <section className="container-form-login">
          <form className="form-login">
            <h2 className="login-to-your-account"> Entre Em Sua Conta </h2>
            <Input
              type="email"
              value={ email }
              id="email"
              textLabel="Email: "
              className="input-login"
              onChange={ this.handleChange }
              dataTestId="email-input"
            />
            <Input
              type="password"
              value={ password }
              id="password"
              className="input-login"
              textLabel="Senha: "
              onChange={ this.handleChange }
              dataTestId="password-input"
            />
            <Button
              textButton="Entrar"
              onClick={ this.submitUser }
              disabled={ !disabled }
              className="btn-submit"
            />
          </form>
        </section>
        { redirect && <Redirect to="/carteira" /> }
      </main>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    userEmail: (email) => dispatch(addUserEmail(email)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
