import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDataLogin } from '../actions/user';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const MIN_LENGTH_PASSWORDS = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    return (
      <form>
        <Input
          nameLabel=""
          id="email-input"
          dataTestId="email-input"
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          nameLabel=""
          id="password-input"
          dataTestId="password-input"
          type="password"
          placeholder="Senha"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <Button
            type="submit"
            nameLabel="Entrar"
            onClick={ this.handleClick }
            disabled={ !this.checkDataLogin() }
          />
        </Link>
      </form>
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
