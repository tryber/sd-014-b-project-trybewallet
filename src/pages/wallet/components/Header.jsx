import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

export default function Header() {
  const { email } = useSelector((state) => state.user);
  return (
    <header>
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">
          {`Despesa Total: ${new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(0)}`}
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </div>
      <Form />
    </header>
  );
}
