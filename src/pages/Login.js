import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGIN_ACT from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { state: { email, password, regex }, props: { login } } = this;
    const length = 6;
    return (
      <section>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !regex.test(email) || password.length < length }
            onClick={ () => login(email) }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

Login.propTypes = { login: PropTypes.func.isRequired };

const mapDispatch = (dispatch) => ({ login: (value) => dispatch(LOGIN_ACT(value)) });

export default connect(null, mapDispatch)(Login);
