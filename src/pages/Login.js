import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendUserInfo } from '../actions';
import '../App.css';

// eslint-disable-next-line max-lines-per-function
function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  function onSubmitForm() {
    dispatch(sendUserInfo(email));
    history.push('/carteira');
  }

  function isEmailValid(userEmail) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail) === true;
  }
  const MININUM_NUMBER = 6;
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="input-email">
            Email:
            <input
              data-testid="email-input"
              id="input-email"
              name="email"
              type="text"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <label htmlFor="input-password">
            senha:
            <input
              data-testid="password-input"
              type="password"
              name="senha"
              id="input-password"
              onChange={ ({ target }) => setSenha(target.value) }
            />
          </label>
          <button
            disabled={ !isEmailValid(email) || senha.length < MININUM_NUMBER }
            type="button"
            onClick={ onSubmitForm }
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
