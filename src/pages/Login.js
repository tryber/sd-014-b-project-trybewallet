import { Button } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

// func retirada do slack, colaboracao do amigo michael turma 14b
function isEmailValid(email) {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
}

const six = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const button = useRef(null);

  function isPasswordValid(pw) {
    return pw.length > six;
  }

  return (

    <>
      <input
        type="email"
        placeholder="E-mail"
        onChange={ (event) => { setEmail(event.target.value); } }
      />
      <input
        type="password"
        id="passwordInput"
        placeholder="password"
        onChange={ (event) => { setPassword(event.target.value); } }
      />
      <Button
        ref={ button }
        disabled={ !isEmailValid(email) || !isPasswordValid(password) }
        type="submit"
        onClick={ () => {
          history.push('/carteira');
        } }
      >
        Entrar
      </Button>
    </>
  );
}

export default Login;
