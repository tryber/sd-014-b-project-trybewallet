import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginVerification = this.loginVerification.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { setUserEmail } = this.props;
    const { email } = this.state;
    setUserEmail(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.loginVerification()); // Coloquei como arrow func pois assim não gera erro de falso positivo
  }

  loginVerification() {
    const { email, password } = this.state;
    const minPassworLength = 6;
    const validatedEmail = email.includes('@') && email.endsWith('.com');
    if (validatedEmail && password.length >= minPassworLength) {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  }

  render() {
    const { btnDisable } = this.state;
    return (
      <div>
        <form>
          <input
            id="email-input"
            data-testid="email-input"
            type="email"
            placeholder="Digite seu email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            id="passord-input"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={ this.handleChange }
          />
        </form>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ btnDisable }
            onClick={ () => this.handleClick() }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (state) => dispatch(saveUserEmail(state)),
});

Login.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
