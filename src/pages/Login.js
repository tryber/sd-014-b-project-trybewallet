import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: 'alguem@email.com',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { email, password } = target;
    const validHandleChange = this.handleEmail(email) && this.handlePass(password);
    this.setState({ disabled: !validHandleChange });
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
    const { email, password, disabled } = this.state;
    const { stateEmail } = this.props;
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
          onClick={ () => stateEmail(email && password) }
          disabled={ disabled }
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
  stateEmail: (state) => dispathParam(userAction(state)),
});

Login.propTypes = {
  handleEmail: PropTypes.func,
  handlePass: PropTypes.func,
  handleChange: PropTypes.func,
  stateEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
