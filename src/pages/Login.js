import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      password: '',
      email: '',
    };
  }

  componentDidUpdate() {
    this.enableButton();
  }

  handleChange({ target }) {
    const { type, value } = target;
    this.setState({
      [type]: value,
    });
  }

  enableButton() {
    const { password, email } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const minLength = 6;
    if (password.length >= minLength && regex.test(email)) {
      return false;
    }
    return true;
  }

  handleSubmit() {
    const { setUser } = this.props;
    const { email } = this.state;
    setUser(email);
  }

  render() {
    return (
      <div>
        <form>
          <h1>Login</h1>
          <input
            data-testid="email-input"
            type="email"
            autoComplete="username"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            autoComplete="current-password"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ this.enableButton() }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) => dispatch(logUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
