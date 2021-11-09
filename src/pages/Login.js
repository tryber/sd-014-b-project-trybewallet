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
      verify: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.verify = this.verify.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.verify();
  }

  verifyEmail(email) {
    const check = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return check.test(email);
  }

  verify() {
    const { email, password } = this.state;
    const MINIMUM = 6;
    if (this.verifyEmail(email) && password.length >= MINIMUM) {
      this.setState({ verify: false });
    } else { this.setState({ verify: true }); }
  }

  submit() {
    const { email } = this.state;
    const { history, setEmail } = this.props;
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, verify } = this.state;
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
          disabled={ verify }
          onClick={ this.submit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  setEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
