import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  formValidation() {
    const { email, password } = this.state;
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailTest = emailValidation.test(email);
    const MIN_LENGTH = 6;
    const passwordTest = password.length >= MIN_LENGTH;
    return emailTest && passwordTest;
  }

  render() {
    const { email, password } = this.state;
    const { history } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-Mail:
          <input
            value={ email }
            type="email"
            data-testid="email-input"
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            type="password"
            data-testid="password-input"
            id="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !this.formValidation() }
          onClick={ () => (history.push('/carteira')) } // fazer handleSubmit
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

/* mapDispatchToProps () */

export default Login;
