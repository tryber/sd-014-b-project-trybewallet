import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setUsersValue } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  disableBtn() {
    const N = 6;
    const { email, password } = this.state;
    if (email.includes('@' && '.com') && password.length >= N) {
      return false;
    } return true;
  }

  render() {
    const { email, password } = this.state;
    const { disableBtn, handleChange } = this;
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={ handleChange }
          />
        </label>
        <button disabled={ disableBtn() } id="btn__submit" type="submit">Entrar</button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(setUsersValue(value)),
});

export default connect(null, mapDispatchToProps)(Login);
