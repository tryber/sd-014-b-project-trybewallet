import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendLoginInfo } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  // função feita de acordo com o projeto em grupo Trivia
  // link do repositorio: https://github.com/tryber/sd-014-b-project-trivia-react-redux/pull/466
  verifyLogin() {
    const SIX = 6;
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= SIX;
  }

  render() {
    const { email, password } = this.state;
    const { sendInfo } = this.props;
    const { handleChange, verifyLogin, state } = this;
    return (
      <header className="App-header">
        <form action="">
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ (e) => handleChange(e) }
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ (e) => handleChange(e) }
          />
          <Link to="/carteira">
            <button
              type="button"
              data-testid="btn-play"
              onClick={ () => {
                sendInfo(state);
              } }
              disabled={ !verifyLogin() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendInfo: (loginInfo) => dispatch(sendLoginInfo(loginInfo)),
});

Login.propTypes = {
  sendInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
