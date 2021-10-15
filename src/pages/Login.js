import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validateEmail(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  handleClick() {
    const { history, sendEmail } = this.props;
    sendEmail(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const minChars = 6;
    const disabled = password.length >= minChars && this.validateEmail(email);
    return (
      <section>
        <h1>TrybeWallet</h1>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  sendEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (state) => dispatch(getEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
