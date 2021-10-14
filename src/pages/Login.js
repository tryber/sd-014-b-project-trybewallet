import React, { useState } from 'react';

function Login() {
  const [emailInput, setEmailValue] = useState('');
  const [password, setPasswordValue] = useState('');

  // Ajuda do Michael Caxias para fazer o regex
  const isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  };

  const num = 6;
  const disabled = password.length >= num && isEmailValid(emailInput);

  return (
    <form>
      <input
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmailValue(value) }
      />
      <input
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setPasswordValue(value) }
      />
      <button type="button" disabled={ !disabled }>Entrar</button>
    </form>
  );
}

export default Login;
