import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmailInState } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    userEmail(email);
  }

  render() {
    const { email, password } = this.state;
    const { handleChange, handleClick } = this;

    const validationEmail = () => {
      // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
      const reg = /\S+@\S+\.\S+/;
      return reg.test(email);
    };

    const sizePass = 6;
    const validationPass = password.length >= sizePass;

    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            id="input-email"
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Password:
          <input
            id="input-password"
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !(validationEmail() && validationPass) }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(saveEmailInState(email)),
});

export default connect(null, mapDispatchToProps)(Login);
