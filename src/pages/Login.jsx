import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../store/index';
import { inputEmail } from '../actions/index';

const isDisabled = (email, password) => {
  const MIN_LENGTH = 6;
  const isEmailValid = email === 'alguem@email.com';
  const isPasswordValid = password.length >= MIN_LENGTH;
  return !(isEmailValid && isPasswordValid);
};

export default function Login() {
  const { dispatch } = store;
  const [password, inputPassword] = useState('');
  const { email } = useSelector((state) => state.user);
  return (
    <form>
      <fieldset>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@email.com"
          onChange={ (e) => dispatch(inputEmail(e.target.value)) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          onChange={ (e) => inputPassword(e.target.value) }
        />
        <button disabled={ isDisabled(email, password) } type="button">
          Entrar
        </button>
      </fieldset>
    </form>
  );
}
