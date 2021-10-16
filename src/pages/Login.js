import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkLogin } from '../actions';

const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regexEmail.test(email)) return true;
  return false;
};
// Função de validação extraída do slack postagem do nosso amigo Michael Caxias

function Login({ history, dispatchLogin }) {
  const [email, newEmail] = useState('');
  const [password, newPassword] = useState('');

  const handleClick = () => {
    dispatchLogin(email);
    history.push('/carteira');
  };

  const minLength = 6;
  const disabled = password.length >= minLength && isEmailValid(email);

  return (
    <form>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          value={ email }
          required
          onChange={ ({ target: { value } }) => newEmail(value) }
          data-testid="email-input"
        />

      </label>
      <input
        type="password"
        value={ password }
        required
        onChange={ ({ target: { value } }) => newPassword(value) }
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
  dispatchLogin: (email) => dispatch(checkLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchLogin: PropTypes.func.isRequired,
};
