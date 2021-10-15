import React from 'react';
// import { useSelector } from 'react-redux';
import store from '../store/index';
import { inputEmail, inputPassword } from '../actions/index';

export default function Login() {
  // const { email, password } = useSelector((state) => state.user);
  const { dispatch } = store;
  return (
    <form>
      <fieldset>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@email.com"
          // value={ email }
          onChange={ (e) => dispatch(inputEmail(e.target.value)) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          // value={ password }
          onChange={ (e) => dispatch(inputPassword(e.target.value)) }
        />
        <button type="button">Entrar</button>
      </fieldset>
    </form>
  );
}
