import React from 'react';

export default function Login() {
  return (
    <form>
      <fieldset>
        <input type="email" name="email" data-testid="email-input" />
        <input type="password" name="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </fieldset>
    </form>
  );
}
