import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    // this.onSubmitLogin = this.onSubmitLogin.bind(this);
    // this.isPassValid = this.isPassValid.bind(this);
  }

  // https://stackoverflow.com/questions/19605150
  // isPassValid(pass) {
  //   const regexEmail = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  //   return regexEmail.test(pass)
  // }

  // onSubmitLogin() {
  //   const { loginDispatchSetValue, history } = this.props;
  //   const { email } = this.state;
  //   history.push('/carteira');
  //   loginDispatchSetValue(email);
  //   console.log('onSubmitLogin()');
  // }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    const { saveEmail } = this.props;
    const validLength = 6;
    const validEmailAndPass = this.isEmailValid(email) && senha.length >= validLength;
    // const validPass = this.isPassValid(senha);
    // test
    return (
      <div className="login-field">
        <form>
          {' '}
          Login
          <input
            name="email"
            value={ email }
            type="email"
            data-testid="email-input"
            placeholder="email"
            onChange={ this.handleChange }
          />
          <input
            name="senha"
            value={ senha }
            type="text"
            data-testid="password-input"
            placeholder="password"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              disabled={ !validEmailAndPass }
              onClick={ () => saveEmail(email) }
              type="submit"
            >
              Entrar
            </button>
          </Link>
        </form>

      </div>);
  }
}

Login.propTypes = {
  // history: PropTypes.shape({
  //   push: PropTypes.func,
  // }).isRequired,
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(submitUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
