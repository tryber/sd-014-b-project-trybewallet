import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser as saveUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailValue: '',
      passwordValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputsValidation = this.inputsValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  inputsValidation() {
    const regex = /\S+@\S+\.\S+/;
    const { emailValue, passwordValue } = this.state;
    const MIN_LENGTH = 6;
    if (regex.test(emailValue) && passwordValue.length >= MIN_LENGTH) {
      return false;
    }
    return true;
  }

  handleClick() {
    const { history, saveUser } = this.props;
    const { emailValue } = this.state;

    saveUser(emailValue);
    history.push('/carteira');
  }

  render() {
    const { emailValue, passwordValue } = this.state;
    const { handleChange, inputsValidation, handleClick } = this;

    return (
      <fieldset>
        <legend>TrybeWallet</legend>
        <form>
          <label htmlFor="e-mail">
            Email:
            <input
              type="email"
              id="e-mail"
              data-testid="email-input"
              name="emailValue"
              onChange={ (e) => handleChange(e) }
              value={ emailValue }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              name="passwordValue"
              onChange={ (e) => handleChange(e) }
              value={ passwordValue }
            />
          </label>
          <button
            type="button"
            disabled={ inputsValidation() }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (user) => dispatch(saveUserAction(user)),
});

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
