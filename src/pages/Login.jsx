import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputEmail } from '../actions/index';

// Uso de expressão regular para validação de email,
// fornecida pelos colegas Michael Caixas e Gustava Sant'Anna no Slack
function isLoginValid(email, password) {
  const MIN_LENGTH = 6;
  const isPasswordValid = password.length >= MIN_LENGTH;
  const parseEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = parseEmail.test(email);
  return isEmailValid && isPasswordValid;
}

function hanldeSubmit(props) {
  const { history } = props;
  history.push('/carteira');
}

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          disabled={ !isLoginValid(email, password) }
          type="button"
          onClick={ () => {
            dispatch(inputEmail(email));
            hanldeSubmit(props);
          } }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}
