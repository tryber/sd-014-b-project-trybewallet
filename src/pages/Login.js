import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendLogin } from '../actions';

// Função para validar email no JavaScript inspirada a partir de
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email) === true;
};

function Login({ history, dispatchSetValue }) {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const handleClick = () => {
    dispatchSetValue(email);
    history.push('/carteira');
  };

  const maxNumber = 6;
  const disabled = password.length >= maxNumber && isEmailValid(email);

  return (
    <form>
      <label htmlFor="email">
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={ email }
          required
          onChange={ ({ target: { value } }) => changeEmail(value) }
          data-testid="email-input"
        />
      </label>
      <input
        type="password"
        placeholder="Senha"
        value={ password }
        required
        onChange={ ({ target: { value } }) => changePassword(value) }
        data-testid="password-input"
      />
      <button
        type="button"
        onClick={ handleClick }
        disabled={ !disabled }
      >
        Entrar

      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(sendLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};
