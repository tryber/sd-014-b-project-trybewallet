import React, { useState } from 'react';

const emailValidation = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email) === true;
}; // Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript;

function Login() {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const limit = 6;
  const btnDisable = password.length >= limit && emailValidation(email);
  return (
    <form action="">
      <input
        data-testid="email-input"
        type="email"
        placeholder="E-mail"
        value={ email }
        onChange={ ({ target: { value } }) => changeEmail(value) }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target: { value } }) => changePassword(value) }
      />
      <button
        type="button"
        disabled={ !btnDisable }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
