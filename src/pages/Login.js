import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, setEmail } = this.props;
    const { email } = this.state;
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const MINLENGTH = 5;
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email, password } = this.state;
    return (
      <form>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          disabled={ !(reg.test(email)) || (password.length <= MINLENGTH) }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
