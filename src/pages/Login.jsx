import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { value, type } = target;
    this.setState({ [type]: value }, () => {
      const { email, password } = this.state;
      if (this.validEmailAndPassword(email, password)) {
        this.setState({ disabled: false });
      }
    });
  }

  emailValid(email) {
    const regex = /\S+@\S+\.+c+o+m/;
    return regex.test(email);
  }

  validEmailAndPassword(email, password) {
    const MIN_LENGTH_PASSWORD = 5;
    if (this.emailValid(email)) {
      if (password.length > MIN_LENGTH_PASSWORD) {
        return true;
      }
      return false;
    }
    return false;
  }

  render() {
    const { email, password, disabled } = this.state;
    const { addEmailDispatch } = this.props;
    return (
      <form>
        <input
          value={ email }
          onChange={ this.handleInput }
          data-testid="email-input"
          placeholder="E-mail..."
          type="email"
          required
        />
        <input
          value={ password }
          onChange={ this.handleInput }
          data-testid="password-input"
          placeholder="Senha..."
          type="password"
          minLength="6"
          required
        />
        <Link to="/carteira">
          <button
            onClick={ () => addEmailDispatch(email) }
            disabled={ disabled }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmailDispatch: (email) => dispatch(addEmail(email)),
});

Login.propTypes = {
  addEmailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
