import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: 'alguem@email.com',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { email, password } = target;
    const validHandleChange = this.handleEmail(email) && this.handlePass(password);
    this.setState({ isDisabled: !validHandleChange });
  }

  handleEmail(email) {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
  }

  handlePass(password) {
    const caracterPass = 6;
    return password.length >= caracterPass;
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { submit } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          id="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          name="password"
          id="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => submit(email && password) }
          disabled={ isDisabled }
        >
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispathParam) => ({
  submit: (state) => dispathParam(submit(state)),
});

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
