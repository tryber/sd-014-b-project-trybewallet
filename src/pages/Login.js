import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

const PASSWORD_LIMIT = 6;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  emailValidation(emailToValidate) { // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const regex = /\S+@\S+\.\S+/; // qualquer string + @ + qualquer string + . + qualquer string (s@s.s)
    return regex.test(emailToValidate);
  }

  render() {
    const { email, password } = this.state;
    const { emailToGlobalState } = this.props;
    return (
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !this.emailValidation(email) || password.length < PASSWORD_LIMIT }
          onClick={ () => emailToGlobalState(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  emailToGlobalState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    emailToGlobalState: (email) => dispatch(saveEmail(email)),
  }
);

export default connect(null, mapDispatchToProps)(Login);
