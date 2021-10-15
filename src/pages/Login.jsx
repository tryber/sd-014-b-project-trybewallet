import React from 'react';

export default function Login() {
  return (
    <form>
      <fieldset>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@email.com"
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          minLength="6"
        />
        <button type="button">Entrar</button>
      </fieldset>
    </form>
  );
}
