import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../actions';

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Dica do Sant'Anna

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    const isValid = regex.test(email);
    const minCaracter = 5;
    const enabled = isValid && password.length > minCaracter;

    return (
      <form>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="E-mail"
          onChange={ (e) => this.setState({ email: e.target.value }) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ (e) => this.setState({ password: e.target.value }) }
        />
        <button
          type="button"
          disabled={ !enabled }
          onClick={ () => login({ email, password }) }
        >
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);
