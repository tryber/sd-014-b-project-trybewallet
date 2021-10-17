import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const { email } = useSelector((state) => state.user);
  return (
    <header>
      <span data-testid="email-field">{`Email: ${email}`}</span>
      <span data-testid="total-field">
        {`Despesa Total: ${new Intl.NumberFormat('pr-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(0)}`}
        <span data-testid="header-currency-field">BRL</span>
      </span>
    </header>
  );
}
