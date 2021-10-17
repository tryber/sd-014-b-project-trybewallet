import React from 'react';

export default function Header(props) {
  const { email } = props;
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
