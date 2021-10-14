import React from 'react';

function Login() {
  return (
    <form>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button type="button">Entrar</button>
    </form>
  );
}

export default Login;
