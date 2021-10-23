import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: false,
      password: false,
    };

    this.emailHendleChange = this.emailHendleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.alterDisabled = this.alterDisabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // reference: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  emailHendleChange({ target: { value } }) {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(value)) {
      this.setState({
        email: true,
      });
    } else {
      this.setState({
        email: false,
      });
    }
  }

  passwordHandleChange({ target: { value } }) {
    const MIN_LETTER = 6;
    if (value.length >= MIN_LETTER) {
      this.setState({
        password: true,
      });
    } else {
      this.setState({
        password: false,
      });
    }
  }

  alterDisabled(email, password) {
    if (email && password) {
      return false;
    }
    return true;
  }

  handleSubmit() {
    const { login } = this.props;
    const inputEmail = document.getElementById('inputEmail').value;
    login(inputEmail);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="inputEmail">
            <input
              data-testid="email-input"
              type="text"
              id="inputEmail"
              placeholder="E-mail"
              onChange={ (e) => this.emailHendleChange(e) }
            />
          </label>
          <label htmlFor="inputPassword">
            <input
              data-testid="password-input"
              type="password"
              id="inputPassword"
              placeholder="Senha"
              onChange={ (e) => this.passwordHandleChange(e) }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              id="btnSubmit"
              disabled={ this.alterDisabled(email, password) }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => (dispatch(formAction(email))),
});

export default connect(null, mapDispatchToProps)(Login);
