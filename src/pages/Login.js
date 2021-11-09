import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendLogin } from '../actions';

const emailValidation = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email) === true;
}; // Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript;

function Login({ history, dispatchSetValue }) {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const limit = 6;
  const btnDisable = password.length >= limit && emailValidation(email);

  const handleClick = () => {
    dispatchSetValue(email);
    history.push('/carteira');
  };

  return (
    <form action="">
      <input
        data-testid="email-input"
        type="email"
        placeholder="E-mail"
        value={ email }
        onChange={ ({ target: { value } }) => changeEmail(value) }
        required
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target: { value } }) => changePassword(value) }
        required
      />
      <button
        type="button"
        disabled={ !btnDisable }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  hitory: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(sendLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
