import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isUserAuthenticated: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
    this.isUserValid = this.isUserValid.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin() {
    const { dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    this.setState({ isUserAuthenticated: true });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // ref: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  isEmailValid(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  isPasswordValid(password) {
    const numberMinCharacter = 6;
    return password.length >= numberMinCharacter;
  }

  isUserValid() {
    const { email, password } = this.state;
    return (this.isEmailValid(email) && this.isPasswordValid(password));
  }

  render() {
    const { email, password, isUserAuthenticated } = this.state;

    return (
      <section>
        <h1>Trybe</h1>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            disabled={ !this.isUserValid() }
            onClick={ this.onSubmitLogin }
          >
            Entrar
          </button>
        </form>
        { isUserAuthenticated ? <Redirect to="/carteira" /> : ''}
      </section>
    );
  }
}

/**
 * Consultei o repositorio exercise-forms-redux para
 * estudar e compreender como implementar:
 * - mapDispatchToProps()
 * - mapStateToProps()
 * Ref: https://github.com/andersonleite1/exercise-forms-redux/blob/gabarito.2/src/pages/PersonalForms.jsx
 */

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetValue: (data) => dispatch(setUserData(data)),
  };
}

function mapStateToProps(state) {
  return { userData: state.user.userData };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
