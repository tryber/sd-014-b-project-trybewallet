import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../store/index';
import { inputEmail } from '../actions/index';

// Uso de expressão regular para validação de email,
// fornecida pelos colegas Michael Caixas e Gustava Sant'Anna no Slack
const isDisabled = (email, password) => {
  const MIN_LENGTH = 6;
  const parseEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = parseEmail.test(email);
  const isPasswordValid = password.length >= MIN_LENGTH;
  return !(isEmailValid && isPasswordValid);
};

const handleSubmit = (props) => {
  const { history } = props;
  history.push('/carteira');
};

export default function Login(props) {
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
          value={ email }
          onChange={ (e) => dispatch(inputEmail(e.target.value)) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          value={ password }
          onChange={ (e) => inputPassword(e.target.value) }
        />
        <button
          disabled={ isDisabled(email, password) }
          type="button"
          onClick={ () => handleSubmit(props) }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}
