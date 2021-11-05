import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendAcess } from '../actions';

const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email) === true;
};

function Login({ history, dispatchAcess }) {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const handleClick = () => {
    dispatchAcess(email);
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
        className="btn btn-primary"
        disabled={ !disabled }
      >
        Entrar

      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAcess: (email) => dispatch(sendAcess(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchAcess: PropTypes.func.isRequired,
};
