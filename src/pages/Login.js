import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendLogin } from '../actions';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function Login({ history, dispatchEmail }) {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  function handleSubmit() {
    dispatchEmail(email);
    history.push('/carteira');
  }
  const minNumberPassword = 6;
  const enabled = (password.length >= minNumberPassword
    && validateEmail(email));
  return (
    <form>
      <label htmlFor="email-input">
        <input
          type="email"
          placeholder="Digite o E-mail"
          value={ email }
          required
          onChange={ ({ target: { value } }) => changeEmail(value) }
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          placeholder="Digite a Senha"
          value={ password }
          required
          onChange={ ({ target: { value } }) => changePassword(value) }
          data-testid="password-input"
        />
      </label>
      <button
        type="button"
        onClick={ handleSubmit }
        disabled={ !enabled }
      >
        Entrar

      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(sendLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: propTypes.func,
  }).isRequired,
  dispatchEmail: PropTypes.func.isRequired,
};
