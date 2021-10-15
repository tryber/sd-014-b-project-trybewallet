import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmail, getPassword } from '../reducers/user';

function handleSubmit(props) {
  const { history } = props;
  history.push('/carteira');
}

export default function Login(props) {
  const { email, password, isEmailValid, isPasswordValid } = useSelector(
    (state) => state.login,
  );
  const dispatch = useDispatch();
  return (
    <form>
      <fieldset>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@email.com"
          value={ email }
          onChange={ (e) => dispatch(getEmail(e.target.value)) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          minLength="6"
          value={ password }
          onChange={ (e) => dispatch(getPassword(e.target.value)) }
        />
        <button
          disabled={ !(isEmailValid && isPasswordValid) }
          type="button"
          onClick={ () => handleSubmit(props) }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}
