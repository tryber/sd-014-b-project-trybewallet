import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputEmail } from '../../actions/index';

// Uso de expressão regular para validação de email,
// fornecida pelos colegas Michael Caixas e Gustava Sant'Anna no Slack
function isLoginValid(email, password) {
  const MIN_LENGTH = 6;
  const isPasswordValid = password.length >= MIN_LENGTH;
  const parseEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = parseEmail.test(email);
  return isEmailValid && isPasswordValid;
}

function handleSubmit(props) {
  const { history } = props;
  history.push('/carteira');
}

export default function Login(props) {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form>
      <fieldset>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@email.com"
          value={ email }
          onChange={ handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          value={ password }
          onChange={ handleChange }
        />
        <button
          disabled={ !isLoginValid(email, password) }
          type="button"
          onClick={ () => {
            dispatch(inputEmail(email));
            handleSubmit(props);
          } }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}
