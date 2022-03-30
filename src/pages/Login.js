import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';
import PhoneLogin from '../phone_login_img.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = () => {
    const { email } = this.state;
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  validateButton = () => {
    const { email, password } = this.state;
    // Solução desenvolvida com auxílio dos alunos Michael Caxias e Luiz Gustavo.
    // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation

    const LENGTH_PASSWORD = 6;
    const checkEmailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPass = password.length < LENGTH_PASSWORD;

    return !checkEmailInput.test(email) || checkPass;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <main className="main-login">
        <section className="form-login-section">
          <h1>Trybe</h1>
          <h2>Wallet</h2>
          <form className="form-login-section">
            <label htmlFor="email">
              <input
                className="form-login"
                placeholder="Email"
                type="email"
                name="email"
                value={ email }
                data-testid="email-input"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              <input
                className="form-login"
                placeholder="Senha"
                type="text"
                name="password"
                value={ password }
                onChange={ this.handleChange }
                data-testid="password-input"
              />
            </label>
            <button
              className="login-btn"
              type="button"
              disabled={ this.validateButton() }
              onClick={ this.onSubmit }
            >
              Entrar
            </button>
          </form>
        </section>
        <aside className="image-phone-login">
          <img src={ PhoneLogin } alt="TrybeWallet" width="500" />
        </aside>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (userEmail) => dispatch(userLogin(userEmail)),
}
);

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
