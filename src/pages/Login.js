import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { history, saveLoginAndPassword } = this.props;
    const { login, password } = this.state;
    saveLoginAndPassword(login, password);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const isValidEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const minLength = 6;
    return (
      <div>
        <input
          name="email"
          value={ email }
          data-testid="email-input"
          type="email"
          placeholder="Digite seu email"
          onChange={ this.handleChange }
          required
        />
        <input
          name="password"
          value={ password }
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
          required
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ password.length < minLength || !isValidEmail }
        >
          Entrar

        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveLoginAndPassword: (login, password) => dispatch(saveUserData(login, password)),
  };
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLoginAndPassword: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
